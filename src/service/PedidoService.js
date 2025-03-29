import { Pedido } from "../model/PedidoModel.js";
import { BaseService } from "./BaseService.js";
import { Cliente } from "../model/ClienteModel.js";
import { Fornecedor } from "../model/FornecedorModel.js";
import { ClienteItem } from "../model/ClienteItemModel.js";
import { FornecedorItem } from "../model/FornecedorItemModel.js";
import { Item } from "../model/ItemModel.js";
import { Produto } from "../model/ProdutoModel.js";
import { Op } from "sequelize";

class PedidoService extends BaseService {
    constructor() {
        super(Pedido, 'idpedido', { validateEmailAndDoc: false, includes: ["itens"] });
    }

    findAll = async (id, entity) => {
        const includeOptions = [];
        const whereCondition = id ? { idpedido: id } : {};
    
        if (entity === 'cliente') {
            includeOptions.push({
                model: Cliente,
                as: "clientes",
                through: {
                    model: ClienteItem,
                    attributes: []
                },
                required: true, 
            });
        } else if (entity === 'fornecedor') {
            includeOptions.push({
                model: Fornecedor,
                as: "fornecedores",
                through: {
                    model: FornecedorItem,
                    attributes: []
                },
                required: true, 
            });
        }
    
        const pedidos = await Pedido.findAll({
            where: whereCondition,
            include: [
                {
                    model: Item,
                    as: "itens",
                    required: true,
                    include: [
                        {
                            model: Produto,
                            as: "produto",
                            required: true,
                        },
                        ...includeOptions
                    ]
                }
            ]
        });
    
        return pedidos;
    };
}

export default new PedidoService();