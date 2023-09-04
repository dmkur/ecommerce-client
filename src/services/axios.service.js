import axios from "axios";
import {baseURL} from "../constants";

// const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjY0Y2U3NGZmYmQ3Mzk4ZjY2NzE1Y2MxOSIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2OTM2NDg5MTEsImV4cCI6MTY5MzkwODExMX0.HGSSIB8GnkDvG4ggRNo445STtiCPbsu6wzr0oYabLOY"
const accessToken = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).authReducer).currentUser.accessToken;
const axiosService = axios.create({
    baseURL,
});

const axiosServiceWithToken = axios.create({
    baseURL,
    headers: {Authorization: accessToken}
});

export {axiosService, axiosServiceWithToken}
