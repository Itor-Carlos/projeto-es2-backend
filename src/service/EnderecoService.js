import { Endereco } from "../model/EnderecoModel";
import { validateModel } from "../utils/validation";

class EnderecoService{
    async findAll(){
        return (await Endereco.findAll()).map(endereco => endereco['dataValues']);
    }

    async delete(id){
        if(!id){
            throw new Error("Id não informado.");
        }
        return await Endereco.destroy({where: {idendereco: id}});
    }

    async create(endereco){
        validateModel(Endereco, endereco);
        const createdEndereco = await Endereco.create(endereco);
        return createdEndereco;
    }
}