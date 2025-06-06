import api from "./api";

export async function getConsultas() {
    const response = await api.get("/consulta");
    return response.data;
}

