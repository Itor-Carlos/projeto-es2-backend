import { Produto } from "../model/ProdutoModel.js";
import { BaseService } from "./BaseService.js";


class ProdutoService extends BaseService {
    constructor() {
        super(Produto, 'idproduto', { validateEmailAndDoc: false });
    }
}

export default new ProdutoService();