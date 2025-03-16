import { ClienteEndereco } from "../model/ClienteEnderecoModel.js";
import PEnderecoBaseService from "./PEnderecoBaseService.js";

class ClienteEnderecoService extends PEnderecoBaseService {
    constructor() {
        super(ClienteEndereco);
    }
}

export default new ClienteEnderecoService();