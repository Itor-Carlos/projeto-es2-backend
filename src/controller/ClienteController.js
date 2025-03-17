import PessoaBaseController from "./PessoaBaseController.js";
import ClienteService from "../service/ClienteService.js";
import ClienteEnderecoService from "../service/ClienteEnderecoService.js";

class ClienteController extends PessoaBaseController {
    constructor() {
        super(ClienteService, "cliente", ClienteEnderecoService, "idcliente");
    }
}

export default new ClienteController();