import BaseController from "./BaseController.js";
import FornecedorService from "../service/FornecedorService.js";
import { Endereco } from "../model/EnderecoModel.js";
import FornecedorEnderecoService from "../service/FornecedorEnderecoService.js";

class FornecedorController extends BaseController {
    constructor() {
        super(FornecedorService, "fornecedor");
    }

    // Sobrescrevendo o método create para adicionar a lógica de endereço
    async create(request, response) {
        try {
            const { fornecedor, endereco } = request.body;
            const createdEndereco = await Endereco.create(endereco);
            const createdFornecedor = await this.service.create(fornecedor);
            const createdFornecedorEndereco = await FornecedorEnderecoService.create({
                idfornecedor: createdFornecedor.idfornecedor,
                idendereco: createdEndereco.idendereco
            });

            return response.status(201).json({
                createdFornecedor,
                createdEndereco,
                createdFornecedorEndereco
            });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FornecedorController();