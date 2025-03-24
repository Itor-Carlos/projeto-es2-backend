import { Router } from "express";
import CargoController from "../controller/CargoController.js";

export const routerCargo = Router();

routerCargo.post("/", CargoController.create);
routerCargo.get("/", CargoController.findAll);
routerCargo.delete("/:id", CargoController.delete);
routerCargo.put("/:id", CargoController.update);
routerCargo.post("/alocar_cargo", CargoController.alocarCargo);
routerCargo.get("/alocacoes", CargoController.listarAlocacoes);

export default routerCargo;
