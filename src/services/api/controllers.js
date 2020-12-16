import {apiBaseUrl} from '../../constants/Constants'

/** To send POST http request to the api **/
export async function Post(path , body){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    return await (await fetch(`${apiBaseUrl}/${path}`, requestOptions)).json();
}

/** To send GET http request to the api **/
export async function Get(path , body){
    const requestOptions = {
        method: 'GET',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },

    };
    return await (await fetch(`${apiBaseUrl}/${path}`, requestOptions)).json();
}