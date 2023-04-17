import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '523c4c66c6ec4ce3b7b800a1bb2173d0'
    }
})