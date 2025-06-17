import axios from "../../src/axios"

export const fetchSearch = (payload) => {
    const url = '/';
    return axios.get(url, payload)
}