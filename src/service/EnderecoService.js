import { Endereco } from "../model/EnderecoModel.js";
import { BaseService } from "./BaseService.js";


class EnderecoService extends BaseService {
    constructor() {
        super(Endereco, 'idendereco', { validateEmailAndDoc: false });
    }
}

export default new EnderecoService();