import axios from 'axios';

import config from '../config/index';
let Api = null;

Api = axios.create({ baseURL: config.apiUrl });




Api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // console.log({ error });
        return false;
    },
);

export default Api;
