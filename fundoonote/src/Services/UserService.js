import axios from 'axios'
export const SignInApi = (data1) => {
    console.log("before")
    const response = axios.post('https://localhost:44383/api/User/UserLogin',data1)
    console.log("after")
    return response
}

export const SignUpApi = (data2) => {
    console.log("before")
    const response = axios.post('https://localhost:44383/api/User/UserRegistration',data2)
    console.log("after")
    return response
}