import { Request, Response } from "express";
import { Citi, Crud } from "../global";
import { get, request } from "http";

class ConsultaController implements Crud{
    constructor (private readonly  citi = new Citi ("Consulta")){}
    create = async (request: Request, response: Response) => {
        const { tipoConsulta, medicoResponsel, data, hora, descricaoProblema }= request.body;

        const isAnyUndefined = this.citi.areValuesUndefined(
            tipoConsulta,
            medicoResponsel,
            data,
            hora,
            descricaoProblema
        );
        if (isAnyUndefined) return response.status(400).send();

        const newConsulta = { tipoConsulta, medicoResponsel, data, hora, descricaoProblema };
        const { httpStatus, message } = await this.citi.insertIntoDatabase(newConsulta);

        return response.status(httpStatus).send({message});
    };

    get = async (request: Request, response: Response) => {
        const {httpStatus, values} = await this.citi.getAll();

        return response.status(httpStatus).send(values);
    }

    delete = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

        return response.status(httpStatus).send({messageFromDelete});
    };

    update = async (request: Request, response: Response) => {
        const {id} = request.params;
        const { tipoConsulta, medicoResponsel, data, hora, descricaoProblema } = request.body;

        const updatedValues = { tipoConsulta, medicoResponsel, data, hora, descricaoProblema };

        const { httpStatus, messageFromUpdate } = await this.citi.updateValue(id, updatedValues);

        return response.status(httpStatus).send({messageFromUpdate});
    };

    getById = async (request: Request, response: Response) => {
        const {id} = request.params;
        const { httpStatus } = await this.citi.findById (id);

        return response.status(httpStatus).send({id})
    }
};

export default new ConsultaController();