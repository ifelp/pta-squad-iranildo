import express from "express";
import userController from "./controllers/UserController";
import ConsultaController from "./controllers/ConsultaController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);
routes.post("/consulta", ConsultaController.create);
routes.get("/consulta", ConsultaController.get);
routes.delete("/consulta/:id", ConsultaController.delete);
routes.patch("/consulta/:id", ConsultaController.update);
routes.get("/consulta/:id", ConsultaController.getById);

export default routes;
