import AreaService from "../service/AreaService.js";

class AreaController{
    async findAll(request,response){
        return response.status(200).json(await AreaService.findAll());
    }

    async delete(request, response){
        try{
            const {id} = request.params;

            if(!id){
                return response.status(400).json({
                    "message": "O id da área é obrigatório."
                });
            }
            await AreaService.delete(id);
            return response.status(200).json({
                "message": "Área deletada com sucesso."
            });
        }
        catch(error){
            response.status(400).json({
               "message": error.message
            });
        }
    }

    async create(request, response){
        const {hectares, emuso} = request.body;
        try{
            const area = await AreaService.create({hectares, emuso})
            return response.status(201).json(area);
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }

    async update(request, response){
        const {hectares, emuso} = request.body;
        const idarea = request.params.id;

        if(!idarea){
            return response.status(400).json({
                "message": "O id da área é obrigatório."
            });
        }

        try{
            await AreaService.update(idarea,{hectares, emuso});
            return response.status(200).json();
        }
        catch(error){
            response.status(400).json({
                "message": error.message
            });
        }
    }

}

export default new AreaController();