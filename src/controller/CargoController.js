import BaseController from "./BaseController.js"; 
import CargoService from "../service/CargoService.js";

class CargoController extends BaseController {
    constructor() {
        super(CargoService, "cargo");
    }
}

export default new CargoController();