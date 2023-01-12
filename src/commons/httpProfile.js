import axios from "axios";

export default axios.create({
  baseURL: "https://wsdev.helmmxfarma.com/api",
  headers: {
    "Content-type": "application/json"
  }
});