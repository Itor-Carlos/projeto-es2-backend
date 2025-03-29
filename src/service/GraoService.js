import { Grao } from "../model/GraoModel.js";
import { BaseService } from "./BaseService.js";


class GraoService extends BaseService {
    constructor() {
        super(Grao, 'idgrao', { validateEmailAndDoc: false, includes: ["produto"] });
    }
}

export default new GraoService();