import BaseController from './BaseController.js';
import ProdutoService from '../service/ProdutoService.js';

class ProdutoController extends BaseController {
    constructor() {
        super(ProdutoService, 'produto');
    }  
}

export default new ProdutoController();