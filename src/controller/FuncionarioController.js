import { Funcionario } from "../model/FuncionarioModel.js";
import { Endereco } from "../model/EnderecoModel.js";
import FuncionarioEnderecoService from "../service/FuncionarioEnderecoService.js";
import FuncionarioService from "../service/FuncionarioService.js";
import { validateModel } from "../utils/validation.js";

class FuncionarioController{
    async findAll(request, response){
        try {
            const page = parseInt(request.query.page) || 1;
            const pageSize = parseInt(request.query.pageSize) || 10;

            const funcionarios = await FuncionarioService.findAll(page, pageSize);
            response.status(200).json(funcionarios);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    async delete(request, response){
        try{
            const {id} = request.params;
            await FuncionarioService.delete(id);
            return response.status(200).json({
                "message": "Cliente deletado com sucesso."
            });
        }
        catch(error){
            response.status(400).json({
               "message": error.message
            });
        }
    }

    async create(request, response){
        try{
            const {funcionario, endereco} = request.body;
            const createdEndereco = await Endereco.create(endereco);
            const createdFuncionario = await FuncionarioService.create(funcionario);
            const createdFuncionarioEndereco = await FuncionarioEnderecoService.create({
                idfuncionario: createdFuncionario.idfuncionario,
                idendereco: createdEndereco.idendereco
            })

            return response.status(201).json({createdFuncionario, createdEndereco, createdFuncionarioEndereco});
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }
}


export default new FuncionarioController();