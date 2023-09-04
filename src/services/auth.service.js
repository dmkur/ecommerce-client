import {axiosService, axiosServiceWithToken} from "./axios.service";
import {urls} from "../constants";

const authService = {
    login:(user) => axiosService.post(urls.auth, user),
    getUserById:(id) => axiosServiceWithToken.get(urls.users+`/find/${id}` )
}

export {authService}
