import axiosInstance from "../utils/axiosInstance";

class EventsService {
    static get = async () => axiosInstance.get('/events');

    static create = async (eventData) => axiosInstance.post('/events/create', eventData);

    static delete = async (id) => axiosInstance.delete(`/events/${id}`);

    static update = async (id, eventData) => axiosInstance.put(`/events/${id}`, eventData);
}
  
export default EventsService;