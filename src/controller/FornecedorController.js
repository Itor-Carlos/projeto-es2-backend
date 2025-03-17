import PessoaBaseController from "./PessoaBaseController.js";
import FornecedorService from "../service/FornecedorService.js";
import FornecedorEnderecoService from "../service/FornecedorEnderecoService.js";

class FornecedorController extends PessoaBaseController {
    constructor() {
        super(FornecedorService, "fornecedor", FornecedorEnderecoService, "idfornecedor");
    }
}

export default new FornecedorController();