import express from "express";
import userController from "./controllers/UserController";
import PetController from "./controllers/PetController";
import sendEmail from './controllers/mailController'

const routes = express.Router();

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

export default routes;
