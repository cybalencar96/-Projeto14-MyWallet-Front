import axios from 'axios'

axios.defaults.baseURL = "http://localhost:4000";

const api = {
    signUp: (body => {
        return axios.post('/sign-up',body)
    }),

    signIn: (body) => {
        return axios.post('/sign-in',body)
    } ,

    sendEntry: (body) => {
        return axios.post('/registers',body)
    }
}

export default api;