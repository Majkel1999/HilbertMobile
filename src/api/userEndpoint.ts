import { AxiosResponse } from "axios";
import { client } from "./apiClient";

export type AccessToken = {
    access_token: string,
    token_type: string
}

export type UserState = {
    username: string,
    email: string,
    full_name: string
}


export async function API_LoginUser(username: string, password: string): Promise<AccessToken> {
    let form = createFormData({
        "username": username,
        "password": password
    });
    return client.post<AccessToken>('/user/login', form)
        .then(async (response: AxiosResponse<AccessToken, any>) => {
            const body = response.data;
            return body;
        });
}

export async function API_GetUserInfo(token: AccessToken) {
    return client.get<UserState>('/user/', {
        headers: {
            'Authorization': `${token.token_type} ${token.access_token} `
        }
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