import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const productService = {
    getAllProducts:(params={}) => axiosService.get(urls.products, {params:{category:params}}),
    getProductById:(id) => axiosService.get(urls.products+`/find/${id}` )
}

export {productService}
