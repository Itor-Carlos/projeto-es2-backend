import { Cliente } from "../model/ClienteModel.js";
import { Funcionario } from "../model/FuncionarioModel.js";
import { Endereco } from "../model/EnderecoModel.js";
import { Grao } from "../model/GraoModel.js";
import { Safra } from "../model/SafraModel.js";
import { Fertilizante } from "../model/FertilizanteModel.js";
import { Tarefa } from "../model/TarefaModel.js";
import { Area } from "../model/AreaModel.js";
import { Fornecedor } from "../model/FornecedorModel.js";

Cliente.belongsTo(Endereco, { foreignKey: "idendereco", as: "endereco", onDelete: "CASCADE" });
Funcionario.belongsTo(Endereco, { foreignKey: "idendereco", as: "endereco", onDelete: "CASCADE" });
Fornecedor.belongsTo(Endereco, { foreignKey: "idendereco", as: "endereco", onDelete: "CASCADE" });

Safra.belongsTo(Grao, { foreignKey: "idgrao", onDelete: "CASCADE", as: "grao" });

Funcionario.belongsToMany(Tarefa, { through: "Funcionario_Tarefa", foreignKey: "idfuncionario", as: "tarefas" });
Tarefa.belongsToMany(Funcionario, { through: "Funcionario_Tarefa", foreignKey: "idtarefa", as: "funcionarios" });

Area.belongsToMany(Safra, { through: "Area_has_Safra", foreignKey: "idarea", as: "safras" });
Safra.belongsToMany(Area, { through: "Area_has_Safra", foreignKey: "idsafra", as: "areas" });



