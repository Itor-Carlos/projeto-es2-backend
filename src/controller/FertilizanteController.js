import BaseController from "./BaseController.js";
import FertilizanteService from "../service/FertilizanteService.js";
import { Produto } from "../model/ProdutoModel.js";
import ProdutoService from "../service/ProdutoService.js";


class FertilizanteController extends BaseController {
    constructor() {
        super(FertilizanteService, "fertilizante");
    }

    findById = async(request, response) => {
        try {
            const { id } = request.params;
            if (!id) {
                return response.status(400).json({ message: "O id do fertilizante é obrigatório." });
            }
            const fertilizante = await this.service.findById(id, {
                include: [
                    { model: Produto, as: "produto" }
                ]
            });
            if (!fertilizante) {
                return response.status(404).json({ message: "Fertilizante não encontrado." });
            }
            return response.status(200).json(fertilizante);
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
    create = async(request, response) => {
        try {
            const { produto, fertilizante } = request.body;
            const { nome, precounitario, descricao } = produto;
            const { composicao, estadofisico, periodoaplicacaodias } = fertilizante;

            const newProduto = await ProdutoService.create(
                produto
            );

            fertilizante.idproduto = newProduto.idproduto;

            const newFertilizante = await FertilizanteService.create(
                fertilizante
            );

            return response.status(201).json(newFertilizante);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
    update = async (request, response) => {
        try {
            const { id } = request.params;
            const { produto, fertilizante } = request.body;

            if (!id) {
                return response.status(400).json({ message: "O id do fertilizante é obrigatório." });
            }

            const fertilizanteExistente = await this.service.findById(id);
            if (!fertilizanteExistente) {
                return response.status(404).json({ message: "Fertilizante não encontrado." });
            }

            await ProdutoService.update(fertilizanteExistente.idproduto, produto);
            await this.service.update(id, fertilizante);

            return response.status(200).json({ message: "Fertilizante atualizado com sucesso" });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FertilizanteController();