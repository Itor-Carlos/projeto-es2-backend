import GraoService from "../service/GraoService.js";

class GraoController{
    async findAll(request,response){
        const page = parseInt(request.query.page) || 1;
        const pageSize = parseInt(request.query.pageSize) || 10;
        const graos = await GraoService.findAll(page, pageSize);
        return response.status(200).json(graos);
    }
    
    async delete(request, response){
        try{
            const {id} = request.params;

            if(!id){
                return response.status(400).json({
                    "message": "O id do grão é obrigatório."
                });
            }
            await GraoService.delete(id);
            return response.status(200).json({
                "message": "Grão deletada com sucesso."
            });
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }

    async create(request, response){
        const {tempomaturacao, periodoplantioinicio, periodoplantiofim, coeficienterendimento} = request.body;
        try{
            const area = await GraoService.create({tempomaturacao, periodoplantioinicio, periodoplantiofim, coeficienterendimento})
            return response.status(201).json(area);
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }

    async update(request, response){
        const grao = request.body;
        const idGrao = request.params.id;

        if(!idGrao){
            return response.status(400).json({
                "message": "O id do grão é obrigatório."
            });
        }

        try{
            await GraoService.update(idGrao, grao);
            return response.status(200).json({
                'message': "Dados alterados com sucesso"
            });
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }
}

export default new GraoController();