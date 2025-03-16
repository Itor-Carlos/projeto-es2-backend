import BaseController from "./BaseController.js";
import FuncionarioService from "../service/FuncionarioService.js";
import { Endereco } from "../model/EnderecoModel.js";
import FuncionarioEnderecoService from "../service/FuncionarioEnderecoService.js";

class FuncionarioController extends BaseController {
    constructor() {
        super(FuncionarioService, "funcionário");
    }

    // Sobrescrevendo o método create para adicionar a lógica de endereço
    async create(request, response) {
        try {
            const { funcionario, endereco } = request.body;
            const createdEndereco = await Endereco.create(endereco);
            const createdFuncionario = await this.service.create(funcionario);
            const createdFuncionarioEndereco = await FuncionarioEnderecoService.create({
                idfuncionario: createdFuncionario.idfuncionario,
                idendereco: createdEndereco.idendereco
            });

            return response.status(201).json({
                createdFuncionario,
                createdEndereco,
                createdFuncionarioEndereco
            });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new FuncionarioController();