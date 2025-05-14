import axiosInstance from "../utils/axiosInstance";

class AuthService {
    static login = async (body) => axiosInstance.post('/auth/login', body);
}
  
export default AuthService;