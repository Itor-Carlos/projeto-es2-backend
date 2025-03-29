import { validateCreate, validateUpdate, validateEmail, validateDocumento } from "../utils/validation.js";

export class BaseService {
  constructor(Model, idField, options = {}) {
      this.Model = Model;
      this.idField = idField;
      this.validateEmailAndDoc = options.validateEmailAndDoc || false;
      this.includes = options.includes || [];
   }

  async findById(id) {
    const resultId = await this.Model.findByPk(id, { include: this.includes });
    if(!resultId) {
        return {};
    }
    return resultId;
  }

  async findAll(page = 1, pageSize = 10) {
      return await this.Model.findAndCountAll({
          limit: pageSize,
          offset: (page - 1) * pageSize,
          include: this.includes
      });
  }

  async delete(id) {
      if(!id) {
          throw new Error("Id não informado.");
      }
      return await this.Model.destroy({
          where: { [this.idField]: id }
      });
  }

  async create(data) {
        validateCreate(this.Model, data);
        
        if (this.validateEmailAndDoc) {
            const validEmail = validateEmail(data.email);
            if(!validEmail) {
                throw new Error("Email inválido.");
            }

            const validDocumento = validateDocumento(data.documento);
            if(!validDocumento) {
                throw new Error("Documento inválido.");
            }

            const emailAlredyUsed = await this.Model.findOne({ where: { email: data.email } });
            if(emailAlredyUsed) {
                throw new Error("Email já cadastrado.");
            }  

            const documentoAlredyUsed = await this.Model.findOne({ where: { documento: data.documento } });
            if(documentoAlredyUsed) {
                throw new Error("Documento já cadastrado.");
            }
        }

        return await this.Model.create(data);
  }

  async update(id, data) {
      validateUpdate(this.Model, {id, ...data});
      return await this.Model.update(data, { 
          where: { [this.idField]: id } 
      });
  }
}
