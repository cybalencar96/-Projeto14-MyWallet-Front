import axios from 'axios'

axios.defaults.baseURL = "http://localhost:4000";

const api = {
    signUp: (body => {
        return axios.post('/sign-up',body)
    }),

    signIn: (body) => {
        return axios.post('/sign-in',body)
    } ,

    logOut: (token) => {
        return axios.get('/log-out',setHeader(token))
    },

    getUserInfo: (token) => {
        return axios.get('/user',setHeader(token))
    } ,

    sendTransaction: (body) => {
        return axios.post('/registers',body)
    }
}

function setHeader(token) {
    return { headers: {
        Authorization: `Bearer ${token}`
    }}
}
export default api;