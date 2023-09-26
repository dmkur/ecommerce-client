import {axiosServiceWithToken} from "./axios.service";
import {urls} from "../constants";

const orderService = {
    createOrder: (data) => axiosServiceWithToken.post(urls.orders, data)
}

export {orderService}
