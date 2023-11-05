import {axiosService, axiosServiceWithToken} from "./axios.service";
import {urls} from "../constants";

const _accessToken = 'access'

const authService = {
    login:(user) => axiosService.post(urls.auth, user),
    getUserById:(id) => axiosServiceWithToken.get(urls.users+`/find/${id}` ),

    setTokens: (access) => localStorage.setItem(_accessToken,access),
    getAccessToken: () => localStorage.getItem(_accessToken),
    deleteTokens: () => localStorage.removeItem(_accessToken),
}

export {authService}
