import { Fornecedor } from "../model/FornecedorModel.js";
import { validateModel } from "../utils/validation.js";
import { validateDocumento, validateEmail } from "../utils/validation.js";

class FornecedorService {
  async findAll(page, pageSize) {
    return await Fornecedor.findAndCountAll({
      limit: pageSize,
      offset: (page - 1) * pageSize
    });
  }

  async delete(id) {
    if(!id){
      throw new Error("Id não informado.");
    }
    return await Fornecedor.destroy({where: {idfornecedor: id}});
  }

  async create(fornecedor){
    validateModel(Fornecedor, fornecedor);

    const validEmail = validateEmail(fornecedor.email);
    if(!validEmail){
      throw new Error("Email inválido.");
    }

    const validDocumento = validateDocumento(fornecedor.documento);
    if(!validDocumento){
      throw new Error("Documento inválido.");
    }

    const emailAlredyUsed = await Fornecedor.findByEmail(fornecedor.email);
    if(emailAlredyUsed){
      throw new Error("Email já cadastrado.");
    }  

    const documentoAlredyUsed = await Fornecedor.findByDocumento(fornecedor.documento);
    if(documentoAlredyUsed){
      throw new Error("Documento já cadastrado.");
    }

    const createdFornecedor = await Fornecedor.create(fornecedor);
    return createdFornecedor;
  }
}