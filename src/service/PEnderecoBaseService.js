import { validateCreate } from "../utils/validation.js";

class PEnderecoBaseService {
    constructor(Model) {
        this.Model = Model;
    }

    async create(endereco) {
        validateCreate(this.Model, endereco);
        
        const createdEndereco = await this.Model.create(endereco);
        return createdEndereco;
    }
}

export default PEnderecoBaseService;