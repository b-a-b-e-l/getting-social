import axios from 'axios';

const apiEndpoint = "https://dummyapi.io/data/v1"

export const getPosts = () => {
    return axios.get(`${apiEndpoint}/post`, {params: {limit: 20}, headers: {"app-id": "611a380f6e75df584081c2ec"}} )
}  

export const getComments = (postID) => {
    return axios.get(`${apiEndpoint}/post/${postID}/comment`, {params: {limit: 20}, headers: {"app-id": "611a380f6e75df584081c2ec"}})
}