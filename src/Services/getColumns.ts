import axios from "axios";
const url : string = "http://localhost:9000/columns"
export default function getColumns() {
    return axios.get(url)
}
