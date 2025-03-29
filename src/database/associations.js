import { Cliente } from "../model/ClienteModel.js";
import { Funcionario } from "../model/FuncionarioModel.js";
import { Endereco } from "../model/EnderecoModel.js";
import { Grao } from "../model/GraoModel.js";
import { Safra } from "../model/SafraModel.js";
import { Fertilizante } from "../model/FertilizanteModel.js";
import { Tarefa } from "../model/TarefaModel.js";
import { Area } from "../model/AreaModel.js";
import { Fornecedor } from "../model/FornecedorModel.js";
import { Item } from "../model/ItemModel.js";
import { Pedido } from "../model/PedidoModel.js";
import { Produto } from "../model/ProdutoModel.js";

Cliente.belongsTo(Endereco, { foreignKey: "idendereco", as: "endereco", onDelete: "CASCADE" });
Funcionario.belongsTo(Endereco, { foreignKey: "idendereco", as: "endereco", onDelete: "CASCADE" });
Fornecedor.belongsTo(Endereco, { foreignKey: "idendereco", as: "endereco", onDelete: "CASCADE" });

Safra.belongsTo(Grao, { foreignKey: "idgrao", onDelete: "CASCADE", as: "grao" });

Funcionario.belongsToMany(Tarefa, { through: "Funcionario_Tarefa", foreignKey: "idfuncionario", as: "tarefas" });
Tarefa.belongsToMany(Funcionario, { through: "Funcionario_Tarefa", foreignKey: "idtarefa", as: "funcionarios" });

Area.belongsToMany(Safra, { through: "Area_has_Safra", foreignKey: "idarea", as: "safras" });
Safra.belongsToMany(Area, { through: "Area_has_Safra", foreignKey: "idsafra", as: "areas" });

Cliente.belongsToMany(Item, { through: "Cliente_Item", foreignKey: "idcliente", as: "itens" });

Grao.belongsTo(Produto, { foreignKey: "idproduto", as: "produto", onDelete: "CASCADE" });
Fertilizante.belongsTo(Produto, { foreignKey: "idproduto", as: "produto", onDelete: "CASCADE" });

Fornecedor.belongsToMany(Item, { through: "Fornecedor_Item", foreignKey: "idfornecedor", as: "itens" });


Pedido.belongsToMany(Cliente, {
    through: "Cliente_Pedido",
    as: "clientes",
    foreignKey: "idPedido",
});

Pedido.belongsToMany(Fornecedor, {
    through: "Fornecedor_Pedido",
    as: "fornecedores",
    foreignKey: "idPedido",
});

Item.belongsTo(Pedido, { foreignKey: "idpedido", as: "pedido" });
Item.belongsTo(Produto, { foreignKey: "idproduto", as: "produto" });

Item.belongsToMany(Cliente, { through: "Cliente_Item", foreignKey: "iditem", as: "clientes" });
Item.belongsToMany(Fornecedor, { through: "Fornecedor_Item", foreignKey: "iditem", as: "fornecedores" });

Pedido.hasMany(Item, { foreignKey: "idpedido", as: "itens" });