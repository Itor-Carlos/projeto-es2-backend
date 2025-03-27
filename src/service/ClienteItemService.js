import { Item } from "../model/ItemModel.js";
import { Produto } from "../model/ProdutoModel.js";
import { BaseService } from "./BaseService.js";
import ClienteService from "./ClienteService.js";
import ItemService from "./ItemService.js";
import PedidoService from "./PedidoService.js";
import ProdutoService from "./ProdutoService.js";
import { ClienteItem } from "../model/ClienteItemModel.js";

class ClienteItemService extends BaseService{
    constructor(){
        super(ClienteItem);
    }

    create = async (idcliente, iditem) => {

        const clienteItem = {
            idcliente: idcliente,
            iditem: iditem
        }

        return this.Model.create(clienteItem);
    }

    findAll = async (options = {}) => {
        return await ClienteItem.findAll(options);
    }
}

export default new ClienteItemService();