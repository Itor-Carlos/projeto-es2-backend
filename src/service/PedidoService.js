import { Pedido } from "../model/PedidoModel.js";
import { BaseService } from "./BaseService.js";


class PedidoService extends BaseService {
    constructor() {
        super(Pedido, 'idpedido', { validateEmailAndDoc: false });
    }
}

export default new PedidoService();