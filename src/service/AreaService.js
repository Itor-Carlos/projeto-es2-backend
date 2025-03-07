import { Area } from "../model/AreaModel.js";

class AreaService {
    async findAll(){
        return await Area.findAll();
    }
}


export default new AreaService();