import { Item } from "../model/ItemModel.js";
import { BaseService } from "./BaseService.js";

class ItemService extends BaseService {
    constructor() {
        super(Item, 'iditem', { validateEmailAndDoc: false, includes: ["pedido", "produto"] });
    }

    findByIdPedido = async (idPedido) => {
        return await Item.findAll({ where: { idpedido: idPedido } });
    }
}

export default new ItemService();