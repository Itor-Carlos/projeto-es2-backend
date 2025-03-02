import ClienteService from "../service/ClienteService.js";

class ClienteController{
    async findAll(request, response){
        try {
            const clientes = await ClienteService.findAll();
            response.status(200).json(clientes);
        } catch (error) {
            response.status(500).json({ message: error.message });
        }
    }

    async delete(request, response){
        try{
            const {id} = request.params;
            await ClienteService.delete(id);
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
}


export default new ClienteController();