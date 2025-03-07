import { Cliente } from "../model/ClienteModel.js";
import { Fertilizante } from "../model/FertilizanteModel.js";
import { validateModel } from "../utils/validation.js";
import { validateDocumento, validateEmail } from "../utils/validation.js";

class FertilizanteService {
    async findAll() {
        return (await Fertilizante.findAll()).map(fertilizante => fertilizante['dataValues']);
    }

    async delete(id) {
        if(!id){
            throw new Error("Id não informado.");
        }
        return await Fertilizante.destroy({where: {idfertilizante: id}});
    }

    async create(fertilizante){
        validateModel(Fertilizante, fertilizante);
        const fertilizanteCreated = await Fertilizante.create(fertilizante);
        return fertilizanteCreated;
    }

    async update(id, fertilizante){
        return await Fertilizante.update(fertilizante, { where: { idfertilizante: id } });
    }
}

export default new FertilizanteService();