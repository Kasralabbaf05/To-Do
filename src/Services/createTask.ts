import axios from "axios";
const url: string = "http://localhost:9000/tasks";
export default function createTasks(task) {
  return axios.post(url, task);
}
