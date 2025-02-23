import axios from "axios";
const url : string = "http://localhost:9000/tasks"
export default function deleteTask(task) {
    return axios.delete(url,task)
}
