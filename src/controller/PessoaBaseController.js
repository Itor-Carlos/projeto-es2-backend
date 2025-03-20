import BaseController from "./BaseController.js";
import { Endereco } from "../model/EnderecoModel.js";

class PessoaBaseController extends BaseController {
    constructor(service, modelName, enderecoService, entityIdName) {
        super(service, modelName);
        this.enderecoService = enderecoService;
        this.entityIdName = entityIdName;
    }

    findById = async (request, response) => {
        const { id } = request.params;
        const { [this.modelName]: entityData } = request.body;
        if (!id) {
            return response.status(400).json({
                message: `O id da(o) ${this.modelName} é obrigatório.`
            });
        }
        return response.status(200).json(await this.service.findById(id));
    }

    create = async (request, response) => {
        try {
            const { endereco, [this.modelName]: entityData } = request.body;

            // Validação dos dados obrigatórios
            if (!endereco) {
                return response.status(400).json({ 
                    message: "O endereço é obrigatório." 
                });
            }

            if (!entityData) {
                return response.status(400).json({ 
                    message: `Os dados do ${this.modelName} são obrigatórios.` 
                });
            }

            // Validação dos campos do endereço
            const requiredEnderecoFields = ['cep', 'estado', 'cidade', 'bairro', 'logradouro', 'numero'];
            for (const field of requiredEnderecoFields) {
                if (!endereco[field]) {
                    return response.status(400).json({ 
                        message: `O campo ${field} do endereço é obrigatório.` 
                    });
                }
            }
            
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