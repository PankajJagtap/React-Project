import axios from "axios";

 export function getMensCloths(){

    return axios.get("http://localhost:3000/men's clothing");
}