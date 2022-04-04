import axios from 'axios';

const api = axios.create({
    baseURL:'https://free.currconv.com/api/v7'
})


export default api;

// BASEURL:    https://free.currconv.com/api/v7/
// > convert?q=USD_PHP&compact=ultra&apiKey=061a463c954722153cfa;