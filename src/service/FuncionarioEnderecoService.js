import { FuncionarioEndereco } from "../model/FuncionarioEnderecoModel.js";
import PEnderecoBaseService from "./PEnderecoBaseService.js";

class FuncionarioEnderecoService extends PEnderecoBaseService {
    constructor() {
        super(FuncionarioEndereco);
    }
}

export default new FuncionarioEnderecoService();