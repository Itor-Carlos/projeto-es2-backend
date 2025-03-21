import BaseController from "./BaseController.js";
import { Endereco } from "../model/EnderecoModel.js";

class PessoaBaseController extends BaseController {
    constructor(service, modelName, enderecoService, entityIdName, includes = []) {
        super(service, modelName);
        this.enderecoService = enderecoService;
        this.entityIdName = entityIdName;
        this.includes = [...includes, { model: Endereco, as: "endereco" }];
    }

    findById = async (request, response) => {
        try {
            const { id } = request.params;
            if (!id) {
                return response.status(400).json({
                    message: `O id da(o) ${this.modelName} é obrigatório.`
                });
            }
            
            const entity = await this.service.findById(id, {
                include: this.includes
            });
            
            if (!entity) {
                return response.status(404).json({
                    message: `${this.modelName} não encontrado(a).`
                });
            }

            return response.status(200).json(entity);
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }

    create = async (request, response) => {
        try {
            const { endereco, [this.modelName]: entityData } = request.body;

            if (!endereco) {
                return response.status(400).json({ message: "O endereço é obrigatório." });
            }
            if (!entityData) {
                return response.status(400).json({ message: `Os dados do ${this.modelName} são obrigatórios.` });
            }

            const requiredEnderecoFields = ['cep', 'estado', 'cidade', 'bairro', 'logradouro', 'numero'];
            for (const field of requiredEnderecoFields) {
                if (!endereco[field]) {
                    return response.status(400).json({ message: `O campo ${field} do endereço é obrigatório.` });
                }
            }

            const createdEndereco = await this.enderecoService.create(endereco);
            const createdEntity = await this.service.create({
                ...entityData,
                idendereco: createdEndereco.idendereco
            });
            
            return response.status(201).json({
                [this.modelName]: createdEntity,
                endereco: createdEndereco
            });
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }

    update = async (request, response) => {
        try {
            const { id } = request.params;
            const { endereco, [this.modelName]: entityData } = request.body;

            if (!id) {
                return response.status(400).json({
                    message: `O id do(a) ${this.modelName} é obrigatório.`
                });
            }
            if (!endereco) {
                return response.status(400).json({ message: "O endereço é obrigatório." });
            }
            if (!entityData) {
                return response.status(400).json({ message: `Os dados do ${this.modelName} são obrigatórios.` });
            }

            const getModel =  await this.service.findById(id);
            if (!getModel) {
                return response.status(404).json({
                    message: `${this.modelName} não encontrado(a).`
                });
            }
            
            const idEndereco = getModel.idendereco;

            await this.service.update(id, entityData);
            await this.enderecoService.update(idEndereco, endereco);
            
            return response.status(200).json({
                message: "Dados alterados com sucesso"
            });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default PessoaBaseController;