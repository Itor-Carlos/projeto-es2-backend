import { Grao } from "../model/GraoModel.js";
import { validateModel } from "../utils/validation.js";

class GraoService{
    async findAll(){
        return await Grao.findAll();
    }

    async delete(id){
        return await Grao.destroy({ where: { idgrao: id } });
    }

    async create(grao){
        validateModel(Grao, grao);
        return await Grao.create(grao);
    }

    async update(id, grao){
        return await Grao.update(grao, { where: { idgrao: id } });
    }
}

export default new GraoService();