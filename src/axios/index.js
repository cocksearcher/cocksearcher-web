import axios from "axios";
import qs from "qs"

export const Instance = axios.create({
  baseURL: "https://virtserver.swaggerhub.com/smoothbear/cocksearcher/1.0.0",
});

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params)
};
