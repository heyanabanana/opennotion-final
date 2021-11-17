import axios from "axios";

export default axios.create({
  baseURL: `https://notion-sinsecurity.herokuapp.com/api/`,
});
