import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.authReducer
// const currentUser = user && JSON.parse(user).currentUser
// const TOKEN = currentUser?.accessToken
// console.log(TOKEN, "TOKEN");


const axiosService = axios.create({
    baseURL,
});


const axiosServiceWithToken = axios.create({
    baseURL,
    // headers: {Authorization: TOKEN}
});

axiosServiceWithToken.interceptors.request.use((config) => {
    const access = authService.getAccessToken()
    if (access) {
        config.headers.Authorization = access
    }
    return config

})

export {axiosService, axiosServiceWithToken}
