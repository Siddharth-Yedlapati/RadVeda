import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9191'
axios.defaults.headers.post["Content-type"]= 'application/json'

export const request = (method, url, data) => {
    return axios({
        method: method,
        url: url,
        data: data
    });
};