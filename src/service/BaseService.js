import { validateModel, validateEmail, validateDocumento } from "../utils/validation.js";

export class BaseService {
  constructor(Model, idField, options = {}) {
      this.Model = Model;
      this.idField = idField;
      this.validateEmailAndDoc = options.validateEmailAndDoc || false;
  }

  async findById(id) {
      return await this.Model.findByPk(id);
  }

  async findAll(page = 1, pageSize = 10) {
      return await this.Model.findAndCountAll({
          limit: pageSize,
          offset: (page - 1) * pageSize
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
      validateModel(this.Model, data);

      if (this.validateEmailAndDoc) {
          const validEmail = validateEmail(data.email);
          if(!validEmail) {
              throw new Error("Email inválido.");
          }

          const validDocumento = validateDocumento(data.documento);
          if(!validDocumento) {
              throw new Error("Documento inválido.");
          }

          const emailAlredyUsed = await this.Model.findByEmail(data.email);
          if(emailAlredyUsed) {
              throw new Error("Email já cadastrado.");
          }  

          const documentoAlredyUsed = await this.Model.findByDocumento(data.documento);
          if(documentoAlredyUsed) {
              throw new Error("Documento já cadastrado.");
          }
      }

      return await this.Model.create(data);
  }

  async update(id, data) {
      validateModel(this.Model, {id, ...data});
      return await this.Model.update(data, { 
          where: { [this.idField]: id } 
      });
  }
}