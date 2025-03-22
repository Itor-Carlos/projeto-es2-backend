import PessoaBaseController from "./PessoaBaseController.js";
import FuncionarioService from "../service/FuncionarioService.js";
import FuncionarioEnderecoService from "../service/FuncionarioEnderecoService.js";
import EnderecoService from "../service/EnderecoService.js";
import { response } from "express";

class FuncionarioController extends PessoaBaseController {
    constructor() {
        super(FuncionarioService, "funcionario", EnderecoService, "idfuncionario");
    }
}

export default new FuncionarioController();