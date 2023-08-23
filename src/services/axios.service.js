import axios from "axios";
import {baseURL} from "../constants/urls";

// const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjY0Y2U3NGZmYmQ3Mzk4ZjY2NzE1Y2MxOSIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2OTI1NDAyNTcsImV4cCI6MTY5Mjc5OTQ1N30.MGWnfcqYCw8foddKOzF-d2j2oc8lkSXreUHlLkytYFw"
const axiosService = axios.create({
    baseURL,
    // headers: {Authorization: accessToken}
});

export {axiosService}
