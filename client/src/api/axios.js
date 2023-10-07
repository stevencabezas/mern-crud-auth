import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mern-api-utbk.onrender.com/api',
    withCredentials: true
})

export default instance;