import axios from 'axios';

// import config from '../config/index';
let Api = null;

// Api = axios.create({ baseURL: 'http://localhost:5000/' });
Api = axios.create({ baseURL: 'https://super-forms.onrender.com' });




Api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // console.log({ error });
        return false;
    },
);

export default Api;
