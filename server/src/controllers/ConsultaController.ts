import { Request, Response } from "express";
import { Citi, Crud } from "../global";
import { get, request } from "http";

class ConsultaController implements Crud{
    constructor (private readonly  citi = new Citi ("Consulta")){}
    create = async (request: Request, response: Response) => {
        const { tipoConsulta, medicoResponsavel, data, hora, descricaoProblema, pacienteID }= request.body;

        const isAnyUndefined = this.citi.areValuesUndefined(
            tipoConsulta,
            medicoResponsavel,
            data,
            hora,
        );
        if (isAnyUndefined) return response.status(400).send();

        const newConsulta = { tipoConsulta, medicoResponsavel, data, hora, descricaoProblema, pacienteID };
        const { httpStatus, message, value } = await this.citi.insertIntoDatabase(newConsulta);

        return response.status(httpStatus).send([{message, value}]);
    };

    get = async (request: Request, response: Response) => {
        const {httpStatus, values} = await this.citi.getConsultas();

        return response.status(httpStatus).send(values);
    }

    delete = async (request: Request, response: Response) => {
        const { id } = request.params;
        const { httpStatus, messageFromDelete } = await this.citi.deleteValue(id);

        return response.status(httpStatus).send({messageFromDelete});
    };

    update = async (request: Request, response: Response) => {
        const {id} = request.params;
        const { tipoConsulta, medicoResponsavel, data, hora, descricaoProblema } = request.body;

        const updatedValues = { tipoConsulta, medicoResponsavel, data, hora, descricaoProblema };

        const { httpStatus, messageFromUpdate } = await this.citi.updateValue(id, updatedValues);

        return response.status(httpStatus).send({messageFromUpdate});
    };

    getById = async (request: Request, response: Response) => {
        const {id} = request.params;
        const { httpStatus, value } = await this.citi.findById(id);

        return response.status(httpStatus).send(value)
    }

    getConsultsByPet = async(request: Request, response: Response) => {
        const { id } = request.params;
        const { httpStatus, values } = await this.citi.getConsultsByPet(id);
    
        return response.status(httpStatus).send(values);
      };
};

export default new ConsultaController();