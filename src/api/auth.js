import axios from 'axios'
import { baseURL } from './config'

export const login = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, data,{
            withCredentials: true
        })
        return response
    } catch (err) {
        console.log(err)
        return err.response
    }
}

export const getUser = async () => {
    try {
        const response = await axios.get(`${baseURL}/auth/user`, {withCredentials: true})
        return response
    } catch (err) {
        console.log(err)
    }
}

export const logout = async () => {
    try {
        const response = await axios.get(`${baseURL}/auth/logout`, {withCredentials: true})
        return response
    } catch (err) {
        console.log(err)
    }
}