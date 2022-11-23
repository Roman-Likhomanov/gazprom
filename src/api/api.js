import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:23456/api/',
})

export const api = {
    getGroups() {
        return instance.get('groups')
    },
    getMetrics() {
        return instance.get('metrics')
    }
}




