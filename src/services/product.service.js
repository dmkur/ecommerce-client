import { axiosServiceWithToken} from "./axios.service";
import {urls} from "../constants";

const productService = {
    getAllProducts:(params={}) => axiosServiceWithToken.get(urls.products, {params:{category:params}}),
    getProductById:(id) => axiosServiceWithToken.get(urls.products+`/find/${id}` )
}

export {productService}
