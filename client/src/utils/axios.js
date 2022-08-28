import axios from "axios";
const axiosInstant = axios.create({
  baseURL: "http://localhost:3001/",
});
export default axiosInstant;
