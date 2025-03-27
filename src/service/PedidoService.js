import { Pedido } from "../model/PedidoModel.js";
import { BaseService } from "./BaseService.js";


class PedidoService extends BaseService {
    constructor() {
        super(Pedido, 'idpedido', { validateEmailAndDoc: false, includes: ["itens"] });
    }

    findAll = async (options = {}) => {
        return await Pedido.findAll(options);
    }
}

export default new PedidoService();