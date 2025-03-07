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

}

export default new AreaController();