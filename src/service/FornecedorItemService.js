import { ClienteItem } from "../model/ClienteItemModel.js";
import { Item } from "../model/ItemModel.js";
import { Produto } from "../model/ProdutoModel.js";
import { BaseService } from "./BaseService.js";
import ClienteService from "./ClienteService.js";
import ItemService from "./ItemService.js";
import PedidoService from "./PedidoService.js";
import ProdutoService from "./ProdutoService.js";
import { FornecedorItem } from "../model/FornecedorItemModel.js";

class FornecedorItemService extends BaseService{
    constructor(){
        super(FornecedorItem);
    }

    create = async (idfornecedor, iditem) => {

        const fornecedorItem = {
            idfornecedor: idfornecedor,
            iditem: iditem
        }

        return this.Model.create(fornecedorItem);
    }

}

export default new FornecedorItemService();