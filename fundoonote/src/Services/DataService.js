import axios from 'axios'
import TakeNote3 from '../Components/TakeNote3/TakeNote3'

const HeaderConfig = {
    headers:{Authorization:`bearer ${localStorage.getItem("token")}`}
}
const baseUrl='https://localhost:44383/api/Note'

export const getListApi = () => {
    let response= axios.get(`${baseUrl}/RetrieveAllNote`,HeaderConfig)
    return response
}

export const createNewNoteApi = (data) => {
    let response= axios.post(`${baseUrl}/NoteRegistration`, data, HeaderConfig)
    return response
}

export const NoteArchieveApi = (data) => {
    let response = axios.put(`${baseUrl}/ArchieveNote`, data, HeaderConfig)
    return response
}

export const NoteTrashApi = (data) => {
    console.log(data)
    console.log(HeaderConfig)
    let response= axios.put(`${baseUrl}/TrashNote`, data ,HeaderConfig)
    return response
}
    
export const NotePinApi = (data) => {
    console.log(data)
    let response= axios.put(`${baseUrl}/PinNote`, data ,HeaderConfig)
    return response
}

export const NoteColorApi = (data) => {
    console.log(data)
    let response= axios.put(`${baseUrl}/BackgroundColor`, data ,HeaderConfig)
    return response
}

export const NoteUpdateApi = (data,noteID) => {
    console.log(data)
    let response= axios.put(`${baseUrl}/NoteUpdate?NoteID=${noteID}`, data ,HeaderConfig)
    return response
}