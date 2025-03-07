import { Area } from "../model/AreaModel.js";
import { validateModel } from "../utils/validation.js";

class AreaService {
    async findAll(){
        return await Area.findAll();
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