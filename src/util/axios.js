import axios from "axios";
export default ({
  headers,
  method = "GET",
  url,
  data,
  params,
  baseURL = "http://prc391groupproject-env.eba-pbrmimxs.ap-southeast-1.elasticbeanstalk.com/"
}) => {
  return axios({
    headers,
    method,
    url,
    data,
    params,
    baseURL
  });
};
