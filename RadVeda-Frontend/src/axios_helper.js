import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9191'
axios.defaults.headers.post["Content-type"]= 'application/json'

export const getAuthToken = () => {
    return localStorage.getItem("auth_token");
};

export const setAuthToken = (token) => {
    localStorage.setItem("auth_token", token);
};

export const removeAuthToken = () => {
    if(getAuthToken() !== null && getAuthToken() !== "null")
    {
        localStorage.removeItem("auth_token");
    }
};

export const request = (method, url, data, authTokenNeeded) => {
    let headers = {};
    if(authTokenNeeded && getAuthToken() !== null && getAuthToken() !== "null")
    {
        headers = {"Authorization": `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    });
};