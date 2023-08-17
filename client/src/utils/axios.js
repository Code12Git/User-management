import axios from "axios";

const BASE_URL = "http://localhost:9000/api";

//Public Request all users can access this api
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
