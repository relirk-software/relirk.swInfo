import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.co/api/",
  responseType: "json",
  headers: { "Content-Type": "application/json" }
});

export default api;
