import axios from 'axios';

const apiEndpoint = "https://dummyapi.io/data/api"

export const getPosts = () => {
    return axios.get(`${apiEndpoint}/post`, {params: {limit: 20}, headers: {"app-id": "61096989f29d2b6c8da431f6"}} )
}  

export const getComments = (postID) => {
    return axios.get(`${apiEndpoint}/post/${postID}/comment`, {params: {limit: 20}, headers: {"app-id": "61096989f29d2b6c8da431f6"}})
}