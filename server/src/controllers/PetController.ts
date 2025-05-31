import { Request, Response } from "express";
import { Citi, Crud } from "../global";

class PetController implements Crud {
  constructor(private readonly citi = new Citi("Pet")) {}
  create = async (request: Request, response: Response) => {
    const { nome, nomeTutor, especie, idade } = request.body;

    const isAnyUndefined = this.citi.areValuesUndefined(
      nome, 
      nomeTutor, 
      especie, 
      idade
    );
    if (isAnyUndefined) return response.status(400).send();

    const newPet = { nome, nomeTutor, especie, idade };
    const { httpStatus, message } = await this.citi.insertIntoDatabase(newPet);

    return response.status(httpStatus).send({ message });
  };

  get = async (request: Request, response: Response) => {
    const { httpStatus, values } = await this.citi.getAll();

    return response.status(httpStatus).send(values);
  };

  getById = async (request: Request, response: Response) => {
    const {id} = request.params
    const { httpStatus, value } = await this.citi.findById(id);

    return response.status(httpStatus).send(value);
  };

  delete = async (request: Request, response: Response) => {
    const { id } = request.params;

    const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

    return response.status(httpStatus).send({ messageFromDelete });
  };

  update = async (request: Request, response: Response) => {
    const { id } = request.params;
    const { nome, nomeTutor, especie, idade } = request.body;

    const updatedValues = { nome, nomeTutor, especie, idade };

    const { httpStatus, messageFromUpdate } = await this.citi.updateValue(
      id,
      updatedValues
    );

    return response.status(httpStatus).send({ messageFromUpdate });
  };
}

export default new PetController();
