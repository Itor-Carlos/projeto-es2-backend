import { Fertilizante } from "../model/FertilizanteModel.js";
import { BaseService } from "./BaseService.js";


class FertilizanteService extends BaseService {
    constructor() {
        super(Fertilizante, 'idfertilizante', { validateEmailAndDoc: false });
    }
}

export default new FertilizanteService();