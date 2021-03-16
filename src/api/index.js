import axios from "axios";

export default axios.create({
  baseURL: "https://bts0j2wbm8.execute-api.us-east-1.amazonaws.com/dev"
  // baseURL: "https://fv3jw1hj7l.execute-api.us-east-1.amazonaws.com/development",
});
