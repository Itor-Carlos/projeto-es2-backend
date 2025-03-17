import BaseController from './BaseController.js';
import FertilizanteService from "../service/FertilizanteService.js";

class FertilizanteController extends BaseController {
    constructor() {
        super(FertilizanteService, 'fertilizante');
    }
}

export default new FertilizanteController();