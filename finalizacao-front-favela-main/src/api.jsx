import axios from "axios";

const api = axios.create({
  baseURL: 'https://faveladelivery-backend.herokuapp.com/',
  headers: {
    'Access-Control-Allow-Origin': true
  }
})

export default api;

