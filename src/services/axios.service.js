import axios from "axios";
import {baseURL} from "../constants";

let token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).authReducer).currentUser

// console.log(token,'LOL1');

const accessToken = token !== null
? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).authReducer).currentUser.accessToken
: null

// console.log(accessToken,'LOL2');

const axiosService = axios.create({
    baseURL,
});

const axiosServiceWithToken = axios.create({
    baseURL,
    headers: {Authorization: accessToken}
});

export {axiosService, axiosServiceWithToken}
