import axios from "axios";

const api = axios.create({
  baseURL: "https://simplibuy-production.up.railway.app/api/v1",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
  },
});
export default api;
