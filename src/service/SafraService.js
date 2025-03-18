import { Safra } from "../model/SafraModel.js";
import { BaseService } from "./BaseService.js";


class SafraService extends BaseService {
    constructor() {
        super(Safra, 'idsafra', { validateEmailAndDoc: false });
    }
}

export default new SafraService();