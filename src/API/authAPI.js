import axios from 'axios';

const baseURL = `${process.env.REACT_APP_BACKEND_URL}`
export const registerAPI = axios.create({
    baseURL: baseURL ,
})
export const loginAPI = axios.create({
    baseURL: baseURL,
})