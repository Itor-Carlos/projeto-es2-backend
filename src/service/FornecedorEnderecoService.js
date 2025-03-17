import { FornecedorEndereco } from "../model/FornecedorEnderecoModel.js";
import PEnderecoBaseService from "./PEnderecoBaseService.js";

class FornecedorEnderecoService extends PEnderecoBaseService {
    constructor() {
        super(FornecedorEndereco);
    }
}

export default new FornecedorEnderecoService();