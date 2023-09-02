import {axiosService} from "./axios.service";
import {urls} from "../constants";

const orderService = {
    getAllProducts:(params={}) => axiosService.get(urls.orders, {params:{category:params}}),
    createProducts:(data) => axiosService.post(urls.orders, data ),
    getProductById:(id) => axiosService.get(urls.orders+`/find/${id}` ),
}

export {orderService}
