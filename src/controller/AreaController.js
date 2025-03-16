import BaseController from "./BaseController.js";
import AreaService from "../service/AreaService.js";

class AreaController extends BaseController {
    constructor() {
        super(AreaService, "área");
    }

    findById = async (request, response) => {
        const { id } = request.params;
        if (!id) {
            return response.status(400).json({
                message: "O id da área é obrigatório."
            });
        }
        return response.status(200).json(await this.service.findById(id));
    }
}

export default new AreaController();