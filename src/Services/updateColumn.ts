import axios from "axios";
const url : string = "http://localhost:9000/tasks"
export default function updateColumn(column) {
    return axios.put(url,column)
}
