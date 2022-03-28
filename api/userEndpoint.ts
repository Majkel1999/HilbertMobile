const API_URL = "http://192.168.1.31:8000/api/v1"

export async function LoginUser(username: string, password: string) {
    let form = new FormData();
    form.append('username', username);
    form.append('password', password);

    const response = await fetch(API_URL + '/user/login/',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: form
        }).then((respone : Response) => {
            respone.json().then(json => console.log(json))
        })
}