import axios from "axios";

export const URL = "http://localhost:4000/forms";

export class API {
  get = () => axios.get(URL);
  post = (form) => axios.post(URL, form);
  delete = (id) => axios.delete(`${URL}/${id}`);
  put = (form) => axios.put(`${URL}/${form.id}`, form);
}
