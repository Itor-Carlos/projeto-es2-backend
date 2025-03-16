import BaseController from './BaseController.js';
import GraoService from "../service/GraoService.js";

class GraoController extends BaseController {
    constructor() {
        super(GraoService, 'grão');
    }

    // Se precisar sobrescrever algum método específico para Grao, pode fazer aqui
    async create(request, response) {
        try {
            const { tempomaturacao, periodoplantioinicio, periodoplantiofim, coeficienterendimento } = request.body;
            const grao = await this.service.create({
                tempomaturacao, 
                periodoplantioinicio, 
                periodoplantiofim, 
                coeficienterendimento
            });
            return response.status(201).json(grao);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export default new GraoController();