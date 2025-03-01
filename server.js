import express from 'express';
import { config } from 'dotenv';
config();
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json())
const PORT = process.env.DB_PORT || 3306;

app.listen(PORT, () => {
    console.log("Servidor iniciaalizado na em http://localhost:" + PORT);
});