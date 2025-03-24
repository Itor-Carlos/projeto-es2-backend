import { Cargo } from "../model/CargoModel.js";
import { BaseService } from "./BaseService.js";

class CargoService extends BaseService {
  constructor() {
    super(Cargo, "idcargo");
  }
}

export default new CargoService();
