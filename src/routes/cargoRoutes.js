import { Router } from "express";
import CargoController from "../controller/CargoController.js";

export const routerCargo = Router();

routerCargo.post("/", CargoController.create);
routerCargo.get("/", CargoController.findAll);
routerCargo.get("/:id", CargoController.findById);
routerCargo.put("/:id", CargoController.update);
routerCargo.delete("/:id", CargoController.delete);

export default routerCargo;
