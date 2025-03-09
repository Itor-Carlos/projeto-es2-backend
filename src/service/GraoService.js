import { Grao } from "../model/GraoModel.js";
import { validateModel } from "../utils/validation.js";

class GraoService{
    async findAll(page, pageSize){
        return await Grao.findAndCountAll({
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
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