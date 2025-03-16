import PessoaBaseController from "./PessoaBaseController.js";
import FuncionarioService from "../service/FuncionarioService.js";
import FuncionarioEnderecoService from "../service/FuncionarioEnderecoService.js";

class FuncionarioController extends PessoaBaseController {
    constructor() {
        super(FuncionarioService, "funcionário", FuncionarioEnderecoService, "idfuncionario");
    }
}

export default new FuncionarioController();