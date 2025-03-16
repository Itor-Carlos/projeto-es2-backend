import BaseController from "./BaseController.js";
import { Endereco } from "../model/EnderecoModel.js";

class PessoaBaseController extends BaseController {
    constructor(service, modelName, enderecoService, entityIdName) {
        super(service, modelName);
        this.enderecoService = enderecoService;
        this.entityIdName = entityIdName;
    }

    async create(request, response) {
        try {
            const { endereco, ...entityData } = request.body;
            
            // Cria o endereço
            const createdEndereco = await Endereco.create(endereco);
            
            // Cria a entidade (cliente/fornecedor/funcionario)
            const createdEntity = await this.service.create(entityData);
            
            // Cria a relação entre entidade e endereço
            const relationData = {
                [this.entityIdName]: createdEntity[this.entityIdName],
                idendereco: createdEndereco.idendereco
            };
            
            const createdRelation = await this.enderecoService.create(relationData);

            return response.status(201).json({
                [this.modelName]: createdEntity,
                endereco: createdEndereco,
                [`${this.modelName}Endereco`]: createdRelation
            });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default PessoaBaseController;