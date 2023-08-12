import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const productsService = {
    getAllProducts:(params) => axiosService.get(urls.products +`?${params}`)

}

export {productsService}
