import axios from "axios";
const url : string = "http://localhost:9000/tasks"
export default function deleteTask(taskId:string) {
    return axios.delete(`${url}/${taskId}`)
}
