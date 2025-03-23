import BaseController from "./BaseController.js";
import ItemService from "../service/ItemService.js";
import PedidoService from "../service/PedidoService.js";
import ProdutoService from "../service/ProdutoService.js";

class ItemController extends BaseController {
    constructor() {
        super(ItemService, "item", PedidoService, "iditem", ProdutoService, "iditem");
    }

    create = async (request, response) => {
        try {
            const { pedido, produto, item } = request.body;

            const newpPedido = await PedidoService.create(pedido);
            const newProduto = await ProdutoService.create(produto);

            item.idpedido = newpPedido.idpedido;
            item.idproduto = newProduto.idproduto;

            const newItem = await ItemService.create(item);

            return response.status(201).json(newItem);
        } catch (err) {
            console.error("Error creating item:", err);
            return response.status(500).json({ error: "Internal server error" });
        }
    }

    update = async (request, response) => {
        try {
            const { id } = request.params;
            const { pedido, produto, item } = request.body;

            if (!id) {
                return response.status(400).json({
                    message: `O id do item é obrigatório.`
                });
            }

            // Update related pedido if provided
            if (pedido) {
                const existingItem = await ItemService.findById(id);
                await PedidoService.update(existingItem.idpedido, pedido);
            }

            // Update related produto if provided
            if (produto) {
                const existingItem = await ItemService.findById(id);
                await ProdutoService.update(existingItem.idproduto, produto);
            }

            // Update item if provided
            if (item) {
                await ItemService.update(id, item);
            }

            return response.status(200).json({
                message: "Dados alterados com sucesso"
            });
        } catch (err) {
            console.error("Error updating item:", err);
            return response.status(500).json({ error: "Internal server error" });
        }
    }
}
export default new ItemController();