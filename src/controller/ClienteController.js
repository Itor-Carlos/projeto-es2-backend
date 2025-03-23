import PessoaBaseController from "./PessoaBaseController.js";
import ClienteService from "../service/ClienteService.js";
import EnderecoService from "../service/EnderecoService.js";

class ClienteController extends PessoaBaseController {
    constructor() {
        super(ClienteService, "cliente", EnderecoService, "idcliente");
    }
}

export default new ClienteController();