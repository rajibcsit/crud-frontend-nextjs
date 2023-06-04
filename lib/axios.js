import Axios from "axios";
const axios = Axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "X-Requested-with": "XMLHttpRequest",
  },
});

export default axios;
