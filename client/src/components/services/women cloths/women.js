import axios from "axios";

export function getWomenCloths(){

    return axios.get("http://localhost:3000/women's clothing");
}