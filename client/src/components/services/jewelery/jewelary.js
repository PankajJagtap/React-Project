import axios from "axios";

export function getJewelaryProduct(){
    
    return axios.get('http://localhost:3000/jewelery');
}