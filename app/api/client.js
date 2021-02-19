import { create } from 'apisauce';

const apiClient = create({
	//baseURL: 'http://192.168.2.80:19001/api',
	baseURL: 'http://192.168.0.7:3000/api',
});
//whenever we call the server the promise is always resolved
//apisauce gives us standardized errors

export default apiClient;
