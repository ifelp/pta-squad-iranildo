import axios from "axios";

const api = axios.create({
    baseURL: 'https://pta-squad-iranildo-back.onrender.com/',
    headers:{
        'Content-Type': 'application/json'
    }
});

export default api