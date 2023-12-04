import axios from "axios";
import { API_KEY } from "./API_Key";

export default axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/quotes',
    headers: { 'X-Api-Key': API_KEY},
});