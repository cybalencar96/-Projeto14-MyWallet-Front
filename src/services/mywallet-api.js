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

    sendTransaction: (userId,body) => {
        return axios.post(`/transactions/${userId}`,body)
    },

    getTransactions: (userId) => {
        return axios.get(`/transactions/${userId}`)
    }
}

function setHeader(token) {
    return { headers: {
        Authorization: `Bearer ${token}`
    }}
}
export default api;