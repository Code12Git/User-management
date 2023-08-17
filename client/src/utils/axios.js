import axios from "axios";

const BASE_URL = "https://user-tl91.onrender.com/api";

//Public Request all users can access this api
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
