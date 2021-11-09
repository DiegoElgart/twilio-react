/* eslint-disable import/no-anonymous-default-export */ import { axios } from "axios";
import { getJwt } from "./userService";
//console.log(userServi/ce);
axios.defaults.headers.common["x-access-token"] = getJwt();

axios.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 403;
  if (expectedError) alert.error("An unexpected error ocurred");
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
