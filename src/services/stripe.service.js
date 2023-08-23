import {axiosService} from "./axios.service";
import {urls} from "../constants";

const stripeService = {
    userRequest:(data) => axiosService.post(urls.payment, data),
}

export {stripeService}
