import axios from "axios";
const API_URL = "http://ryzen.lan:8000/api/v1"

export const client = axios.create({ baseURL: API_URL })

// client.interceptors.request.use(request => {
//     console.log('Starting Request', JSON.stringify(request, null, 2))
//     return request
// })

// client.interceptors.response.use(response => {
//     console.log('Response:', JSON.stringify(response, null, 2))
//     return response
// })