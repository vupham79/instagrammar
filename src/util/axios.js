import axios from "axios";
export default ({ headers, method = "GET", url, data, params, baseURL }) => {
  return axios({
    headers,
    method,
    url,
    data,
    params,
    baseURL
  });
};
