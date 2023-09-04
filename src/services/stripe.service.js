import { axiosServiceWithToken} from "./axios.service";
import {urls} from "../constants";

const stripeService = {
    userRequest:(data) => axiosServiceWithToken.post(urls.payment, data),
}

export {stripeService}
