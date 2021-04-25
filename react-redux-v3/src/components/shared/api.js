import axios from "axios";

export const URL = "http://localhost:4000/forms";

class API {
  get = (URL) => axios.get(URL);
  post = (form) => axios.post(URL, form);
  delete = (id) => axios.delete(`${URL}/${id}`);
  put = (form) => axios.put(`${URL}/${form.id}`, form);
  search = (content) => axios.get(`${URL}?q=${content}`);
}

const api = new API();

export default api;
