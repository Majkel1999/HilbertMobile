import axios, { AxiosResponse } from "axios";

const API_URL = "http://192.168.1.31:8000/api/v1"

export type AccesToken = {
    access_token: string,
    token_type : string
}

let client = axios.create({ baseURL: API_URL })

client.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
})

client.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
})

export async function LoginUser(username: string, password: string) : Promise<AccesToken> {
    let form = createFormData({
        "username": username,
        "password": password
    });
    console.log(form);
    return client.post<AccesToken>(API_URL + '/user/login', form)
        .then(async (response: AxiosResponse<AccesToken,any>) => {
            const body = response.data;
            console.log(body);
            return body;
        });
}

function createFormData(data: { [key: string]: string }): string {
    let encodedForm: string[] = [];
    for (let key in data) {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(data[key]);
        encodedForm.push(`${encodedKey}=${encodedValue}`);
    }
    return encodedForm.join('&');
}