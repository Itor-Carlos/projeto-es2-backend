import { Cliente } from "../model/ClienteModel.js";
import { BaseService } from "./BaseService.js";


class ClienteService extends BaseService {
    constructor() {
        super(Cliente, 'idcliente', { validateEmailAndDoc: true });
    }
}

export default new ClienteService();