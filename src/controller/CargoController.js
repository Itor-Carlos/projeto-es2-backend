import BaseController from "./BaseController.js";
import CargoService from "../service/CargoService.js";
import FuncionarioCargoService from "../service/FuncionarioCargoService.js";

class CargoController extends BaseController {
    constructor() {
        super(CargoService, "cargo");
    }

    async alocarCargo(request, response) {
        try {
            const { idcargo, idfuncionario } = request.body;
            const cargoAlreadyAllocated = await FuncionarioCargoService.findById(idcargo, idfuncionario);

            if (cargoAlreadyAllocated) {
                return response.status(400).send({ message: "Funcionário já possui esse cargo" });
            }

            await FuncionarioCargoService.create({ idcargo, idfuncionario });
            response.status(201).send({ message: "Cargo alocado com sucesso" });
        } catch (error) {
            console.error(error);
            response.status(500).send({ message: "Erro ao alocar cargo" });
        }
    }

    async listarAlocacoes(request, response) {
        try {
            const alocacoes = await FuncionarioCargoService.findAll();
            response.status(200).send(alocacoes);
        } catch (error) {
            console.error(error);
            response.status(500).send({ message: "Erro ao buscar alocações" });
        }
    }
}

export default new CargoController();
