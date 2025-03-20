import BaseController from "./BaseController.js";
import AreaService from "../service/AreaService.js";

class AreaController extends BaseController {
    constructor() {
        super(AreaService, "área");
    }
}

export default new AreaController();