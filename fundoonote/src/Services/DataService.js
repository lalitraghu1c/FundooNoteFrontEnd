import axios from 'axios'
import TakeNote3 from '../Components/TakeNote3/TakeNote3'
const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}
export const getListApi = () => {
    let response= axios.get("https://localhost:44383/api/Note/RetrieveAllNote",HeaderConfig)
    return response
}