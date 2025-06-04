import api from "./api";

export interface Consulta {
    id: number;
    tipoConsulta: string;
    medicoResponsavel: string;
    data: string;
    hora: string;
    descricaoProblema: string | null;
    pacienteID: string | null;
}

export async function getConsultas() {
    const response = await api.get("/consulta");
    return response.data;
}

export async function createConsulta(data: Omit<Consulta, "id">) {
    const response = await api.post("/consulta", data);
    return response.data;
}

