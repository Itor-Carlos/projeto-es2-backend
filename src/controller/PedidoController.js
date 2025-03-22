import BaseController from "./BaseController.js";
import PedidoService from "../service/PedidoService.js";

class PedidoController extends BaseController {
    constructor() {
        super(PedidoService, "pedido");
    }
}

export default new PedidoController();