import axiosInstance from "../utils/axiosInstance";

class UsersService {
    static get = async () => axiosInstance.get('/users');

    static delete = async (id) => axiosInstance.delete(`/users/${id}`);

    static update = async (id, userData) => axiosInstance.put(`/users/${id}`, userData);

    static create = async (userData) => axiosInstance.post('/users/create', userData);
}
  
export default UsersService;