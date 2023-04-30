import axios from 'axios';

// import config from '../config/index';
let Api = null;
if (process.env.NODE_ENV === "development")
    Api = axios.create({ baseURL: 'http://localhost:5000/' });
else
    Api = axios.create({ baseURL: 'https://super-forms-server-yo4jw.ondigitalocean.app/super-forms-server2' });
// Api = axios.create({ baseURL: 'https://super-forms.onrender.com' });

Api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // console.log({ error });
        return false;
    },
);

export default Api;
