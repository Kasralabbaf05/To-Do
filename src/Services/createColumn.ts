import axios from "axios";
const url: string = "http://localhost:9000/tasks";
export default function createTasks(column) {
  return axios.post(url, column);
}
