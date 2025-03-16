class BaseController {
    constructor(service, modelName) {
        this.service = service;
        this.modelName = modelName;
    }

    async findAll(request, response) {
        try {
            const page = parseInt(request.query.page) || 1;
            const pageSize = parseInt(request.query.pageSize) || 10;
            
            const items = await this.service.findAll(page, pageSize);
            return response.status(200).json(items);
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
    
    async create(request, response) {
        try {
            const data = request.body;
            const created = await this.service.create(data);
            return response.status(201).json(created);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

    async update(request, response) {
        try {
            const { id } = request.params;
            const data = request.body;

            if (!id) {
                return response.status(400).json({
                    message: `O id do(a) ${this.modelName} é obrigatório.`
                });
            }

            await this.service.update(id, data);
            return response.status(200).json({
                message: "Dados alterados com sucesso"
            });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
    
    async delete(request, response) {
        try {
            const { id } = request.params;
            
            if (!id) {
                return response.status(400).json({
                    message: `O id do(a) ${this.modelName} é obrigatório.`
                });
            }
            
            await this.service.delete(id);
            return response.status(200).json({
                message: `${this.modelName} deletado com sucesso.`
            });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

}

export default BaseController;