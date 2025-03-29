import BaseController from "./BaseController.js";
import GraoService from "../service/GraoService.js";
import { Produto } from "../model/ProdutoModel.js";
import ProdutoService from "../service/ProdutoService.js";


class GraoController extends BaseController {
    constructor() {
        super(GraoService, "grão");
    }

    findById = async(request, response) => {
        try {
            const { id } = request.params;
            if (!id) {
                return response.status(400).json({ message: "O id do grão é obrigatório." });
            }
            const grao = await this.service.findById(id, {
                include: [
                    { model: Produto, as: "produto" }
                ]
            });
            if (!grao) {
                return response.status(404).json({ message: "Grão não encontrado." });
            }
            return response.status(200).json(grao);
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }

    create = async(request, response) => {
        try {
            const { produto, grao } = request.body;
            const { nome, precounitario, descricao } = produto;
            const { tempomaturacao, periodoplantioinicio, periodoplantiofim, coeficienterendimento } = grao;

            const newProduto = await ProdutoService.create(
                produto
            );

            grao.idproduto = newProduto.idproduto;

            const newGrao = await GraoService.create(
                grao
            );

            return response.status(201).json(newGrao);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    update = async (request, response) => {
        try {
            const { id } = request.params;
            const { produto, grao } = request.body;

            if (!id) {
                return response.status(400).json({ message: "O id do grão é obrigatório." });
            }

            const graoExistente = await this.service.findById(id);
            if (!graoExistente) {
                return response.status(404).json({ message: "Grão não encontrado." });
            }

            await ProdutoService.update(graoExistente.idproduto, produto);
            await GraoService.update(id, grao);

            return response.status(200).json({ message: "Grão atualizado com sucesso." });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new GraoController();