import express, { json } from "express";
import userController from "./controllers/UserController";
import PetController from "./controllers/PetController";
import sendEmail from './controllers/mailController'
import ConsultaController from "./controllers/ConsultaController";

const routes = express.Router();

routes.get('/',(req,res)=> res.json({
    message: 'Feito com amor e carinho pelo Squad Iranildo! <3'
}))
routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);
routes.post("/pet", PetController.create);
routes.get("/pet", PetController.get)
routes.get("/pet/:id", PetController.getById)
routes.put("/pet/:id", PetController.update)
routes.delete("/pet/:id", PetController.delete)
routes.post('/email', sendEmail);
routes.post("/consulta", ConsultaController.create);
routes.get("/consulta", ConsultaController.get);
routes.delete("/consulta/:id", ConsultaController.delete);
routes.patch("/consulta/:id", ConsultaController.update);
routes.get("/consulta/:id", ConsultaController.getById);
routes.get("/consultas/pet/:id", ConsultaController.getConsultsByPet);

export default routes;
