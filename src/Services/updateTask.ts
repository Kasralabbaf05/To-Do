import axios from "axios";
const url : string = "http://localhost:9000/tasks"
export default function updateTask(task) {
    return axios.put(url,task)
}
