import { Area } from "../model/AreaModel.js";

class AreaService {
    async findAll(){
        return await Area.findAll();
    }

    async delete(id){
        return await Area.destroy({ where: { idarea: id } });
    }
}


export default new AreaService();