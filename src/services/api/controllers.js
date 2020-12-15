const apiUrl = "https://car-rental-com.herokuapp.com"

export async function Post(path , body){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    const response = await fetch(`${apiUrl}/${path}`, requestOptions);
    return await response.json();
}

export async function Get(path , body){
    const requestOptions = {
        method: 'GET',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },

    };

    const response = await fetch(`${apiUrl}/${path}`, requestOptions);
    return await response.json();
}