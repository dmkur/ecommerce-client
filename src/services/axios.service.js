import axios from "axios";
import {baseURL} from "../constants";


const accessToken = localStorage.getItem("persist:root") === null
? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).authReducer).currentUser.accessToken
: "[]"


const axiosService = axios.create({
    baseURL,
});

const axiosServiceWithToken = axios.create({
    baseURL,
    headers: {Authorization: accessToken}
});

export {axiosService, axiosServiceWithToken}
