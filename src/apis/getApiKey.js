import axios from "axios";

export const apiK = axios
  .post(`http://178.128.206.150:7000/register_candidate`)
  .then((res) => {
    return res.data.apikey;
  });
