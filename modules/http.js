import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY
const signUp_url = "http://localhost:3030"


export const getData = async (path) => {
    const res = await axios.get(BASE_URL + path + "?api_key=" + API_KEY)

    return res
} 


export const signUp = async (body) => {
    const res = axios.post(signUp_url + "/users", body)

    return res
}
export const signIn = async (body) => {
    const res = axios.post(signUp_url + "/users", {strategy: "local", ...body})

    return res
}