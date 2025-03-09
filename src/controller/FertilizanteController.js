import { Endereco } from "../model/EnderecoModel.js";
import ClienteEnderecoService from "../service/ClienteEnderecoService.js";
import ClienteService from "../service/ClienteService.js";
import FertilizanteService from "../service/FertilizanteService.js";

class FertilizanteController{
    async findAll(request, response){
        try {
            
            const page = parseInt(request.query.page) || 1;
            const pageSize = parseInt(request.query.pageSize) || 10;
            const clientes = await FertilizanteService.findAll(page, pageSize);
            response.status(200).json(clientes);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    async delete(request, response){
        try{
            const {id} = request.params;
            await FertilizanteService.delete(id);
            return response.status(200).json({
                "message": "Cliente deletado com sucesso."
            });
        }
        catch(error){
            response.status(400).json({
               "message": error.message
            });
        }
    }

    async create(request, response){
        try{
            const fertilizante = request.body;
            const createdFertilizante = await FertilizanteService.create(fertilizante);
            return response.status(201).json(createdFertilizante);
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }

    async update(request, response){
        try{
            const fertilizante = request.body;
            await FertilizanteService.update(request.params.id, fertilizante);
            return response.status(200).json({
                "message": "Dados atualizados com sucesso."
            });
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }
}


export default new FertilizanteController();