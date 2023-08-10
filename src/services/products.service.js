import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const productsService = {
    getAllProducts:() => axiosService.get(urls.products)
}

export {productsService}
