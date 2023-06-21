import axios from "axios";

export const GetAll = (url) => {
    return axios({
        url: `${url}`,
        method: 'GET'
    })
};