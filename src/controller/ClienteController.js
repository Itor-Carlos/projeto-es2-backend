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
}


export default new ClienteController();