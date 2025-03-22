import PessoaBaseController from "./PessoaBaseController.js";
import FornecedorService from "../service/FornecedorService.js";
import EnderecoService from "../service/EnderecoService.js";

class FornecedorController extends PessoaBaseController {
    constructor() {
        super(FornecedorService, "fornecedor", EnderecoService, "idfornecedor");
    }
}

export default new FornecedorController();