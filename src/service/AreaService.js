import { Area } from "../model/AreaModel.js";
import { BaseService } from "./BaseService.js";


class AreaService extends BaseService {
    constructor() {
        super(Area, 'idarea', { validateEmailAndDoc: false });
    }
}

export default new AreaService();