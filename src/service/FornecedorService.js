import { Fornecedor } from "../model/FornecedorModel.js";
import { BaseService } from "./BaseService.js";

class FornecedorService extends BaseService {
  constructor() {
    super(Fornecedor, 'idfornecedor');
  }
}

export default new FornecedorService();