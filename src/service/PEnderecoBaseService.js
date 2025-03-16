import { validateModel } from "../utils/validation.js";

class PEnderecoBaseService {
    constructor(Model) {
        this.Model = Model;
    }

    async create(endereco) {
        validateModel(this.Model, endereco);
        
        const createdEndereco = await this.Model.create(endereco);
        return createdEndereco;
    }
}

export default PEnderecoBaseService;