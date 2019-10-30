import { create } from "apisauce";
import AuthService from "./auth";

const API = create({
    baseURL: 'http://localhost:8080/',
});

// Tratamento para utilizar try catch na chamada da API
API.addResponseTransform( response => {
    if(!response.ok){
        if(response.status===401){
            AuthService.logout();
        }
        throw response;
    }
});

API.addRequestTransform(request => {
    const token = sessionStorage.getItem('TOKEN_KEY');
    request.headers['Authorization'] = token;
});

const login = (user) => API.post('/auth', user);
const getDatas = (option) => API.get('/Modeling',{option: option}) 

const APIS = {
    login: login,
    getDatas: (option) => getDatas(option), 
}

export default APIS;