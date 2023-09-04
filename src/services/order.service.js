import {axiosServiceWithToken} from "./axios.service";
import {urls} from "../constants";

const orderService = {
    getAllProducts:(params={}) => axiosServiceWithToken.get(urls.orders, {params:{category:params}}),
    createProducts:(data) => axiosServiceWithToken.post(urls.orders, data ),
    getProductById:(id) => axiosServiceWithToken.get(urls.orders+`/find/${id}` ),
}

export {orderService}
