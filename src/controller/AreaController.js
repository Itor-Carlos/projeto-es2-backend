import AreaService from "../service/AreaService.js";

class AreaController{
    async findAll(request,response){
        return response.status(200).json(await AreaService.findAll());
    }
}

export default new AreaController();