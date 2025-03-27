import BaseController from "./BaseController.js";
import ItemService from "../service/ItemService.js";
import PedidoService from "../service/PedidoService.js";
import ProdutoService from "../service/ProdutoService.js";
import ClienteService from "../service/ClienteService.js";
import FornecedorService from "../service/FornecedorService.js";
import ClienteItemService from "../service/ClienteItemService.js";
import FornecedorItemService from "../service/FornecedorItemService.js";
import { response } from "express";
import { Cliente } from "../model/ClienteModel.js";
import { Item } from "../model/ItemModel.js";
import { Produto } from "../model/ProdutoModel.js";
import { Pedido } from "../model/PedidoModel.js";
import { Fornecedor } from "../model/FornecedorModel.js";
import { where } from "sequelize";

class ItemController extends BaseController {
    constructor() {
        super(ItemService, "item", PedidoService, "iditem", ProdutoService, "iditem");
    }

    findAll = async (request, response) => {
        try {
            const pedidos = await PedidoService.findAll({
                include: [
                    {
                        model: Item,
                        as: "itens",
                        include: [
                            {
                                model: Cliente,
                                as: "clientes",
                            },
                            {
                                model: Produto,
                                as: "produto",
                            }
                        ]
                    },
                    {
                        model: Cliente,
                        as: "clientes"
                    },
                    {
                        model: Fornecedor,
                        as: "fornecedores"
                    }
                ]
            });
    
            return response.status(200).json({ 
                pedidos, 
                total: pedidos.length 
            });
    
        } catch (err) {
            console.error("Erro ao buscar pedidos:", err);
            return response.status(500).json({ error: "Erro interno do servidor" });
        }
    };
    
    create = async (request, response) => {
        try {
            const { pedido, produto, item, idcliente, idfornecedor } = request.body;

            console.log(pedido, produto, item, idcliente, idfornecedor);

            const newpPedido = await PedidoService.create(pedido);
            const newProduto = await ProdutoService.create(produto);

            item.idpedido = newpPedido.idpedido;
            item.idproduto = newProduto.idproduto;

            const newItem = await ItemService.create(item);

            if(idcliente){
                const clienteExists = await ClienteService.findById(idcliente);
                if (!clienteExists) {
                    return response.status(404).json({
                        message: `Cliente com id ${idcliente} não encontrado.`
                    });
                }
                const createdClienteItem = await ClienteItemService.create(idcliente, newItem.iditem);
                return response.status(201).json(createdClienteItem);
            }
            else if(idfornecedor){
                const fornecedorExists = await FornecedorService.findById(idfornecedor);
                if (!fornecedorExists) {
                    return response.status(404).json({
                        message: `Fornecedor com id ${idfornecedor} não encontrado.`
                    });
                }
                const createdFornecedorItem = await FornecedorItemService.create(idfornecedor, newItem.iditem);
                return response.status(201).json(createdFornecedorItem);
            }
            
        } catch (err) {
            console.error("Error creating item:", err);
            return response.status(500).json({ error: "Internal server error" });
        }
    }

    update = async (request, response) => {
        try {
            const { id } = request.params;

            const { pedido, produto, item, idcliente, idfornecedor } = request.body;

            if (!id) {
                return response.status(400).json({
                    message: `O id do item é obrigatório.`
                });
            }

            if (!idcliente && !idfornecedor) {
                return response.status(400).json({
                    message: `O id do(a) ${
                        idcliente ? "cliente" : "fornecedor"
                    } é obrigatório.`
                });
            }

            if (pedido) {
                const existingPedido = await PedidoService.findById(pedido.idpedido);
                if (!existingPedido) {
                    return response.status(404).json({
                        message: `Item com id ${id} não encontrado.`
                    });
                }
                await PedidoService.update(existingPedido.idpedido, pedido);
            }

            if (produto) {
                const existingProduto = await ProdutoService.findById(produto.idproduto);
                if (!existingProduto) {
                    return response.status(404).json({
                        message: `Item com id ${id} não encontrado.`
                    });
                }
                await ProdutoService.update(existingProduto.idproduto, produto);
            }

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