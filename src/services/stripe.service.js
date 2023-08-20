import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

// const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjY0Y2U3NGZmYmQ3Mzk4ZjY2NzE1Y2MxOSIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE2OTI1NDAyNTcsImV4cCI6MTY5Mjc5OTQ1N30.MGWnfcqYCw8foddKOzF-d2j2oc8lkSXreUHlLkytYFw"

const stripeService = {
    userRequest:(params={}) => axiosService.post(urls.payment, {
        params:{params},
        // headers: {Authorization: accessToken}
    }),
}

export {stripeService}
