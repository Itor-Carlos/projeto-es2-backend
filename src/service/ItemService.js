import { Item } from "../model/ItemModel.js";
import { BaseService } from "./BaseService.js";

class ItemService extends BaseService {
    constructor() {
        super(Item, 'iditem', { validateEmailAndDoc: false, includes: ["pedido", "produto"] });
    }
}

export default new ItemService();