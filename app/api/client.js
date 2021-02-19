import { create } from 'apisauce';

const apiClient = create({
	baseURL: 'http://'
});
//whenever we call the server the promise is always resolved
//apisauce gives us standardized errors

export default apiClient;
