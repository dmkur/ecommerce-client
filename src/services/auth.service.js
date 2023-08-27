import {axiosService} from "./axios.service";
import {urls} from "../constants";

const authService = {
    login:(user) => axiosService.post(urls.auth, user),
    getUserById:(id) => axiosService.get(urls.users+`/find/${id}` )
}

export {authService}
