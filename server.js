import express from 'express';
import { config } from 'dotenv';
config();
import cors from 'cors';
import bodyParser from 'body-parser';
import { database } from './database.js';
import ClienteController from './src/controller/ClienteController.js';
import clienteRoutes from './src/routes/clienteRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.use('/clientes', clienteRoutes)


const PORT = process.env.PORT_APP || 3306;

const syncDB = async () => {
    try {
        await database.sync({ force: false });
        console.log("Banco de dados sincronizado.");
    } 
    catch (error) {
        console.error("Erro ao sincronizar DB:", error);
    }
};

app.listen(PORT, async () => {
    syncDB();
    console.log("Servidor iniciaalizado na em http://localhost:" + PORT);
});