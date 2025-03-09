import { Area } from "../model/AreaModel.js";
import { validateModel } from "../utils/validation.js";

class AreaService {
    async findAll(page = 1, pageSize = 10){
        return await Area.findAndCountAll({
            limit: pageSize,
            offset: (page - 1) * pageSize
        });
    }

    async delete(id){
        return await Area.destroy({ where: { idarea: id } });
    }
    
    async create(area){
        validateModel(Area, area);
        return await Area.create(area);
    }

    async update(id,area){
        validateModel(Area, {id, ...area});
        return await Area.update(area, { where: { idarea: id } });
    }
}


export default new AreaService();