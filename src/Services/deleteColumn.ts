import axios from "axios";
const url: string = "http://localhost:9000/tasks";
export default function deleteColumn(column) {
  return axios.delete(url, column);
}
