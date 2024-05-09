import axios from "axios";

const base_URL = 'http://localhost:3333/api/'

export const createProgram = async (data) => {
    try {
        const response = await axios.post(`${base_URL}/program/create`, data)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllPrograms = async () => {
    try {
        const response = await axios.get(`${base_URL}/program/allprograms`)
        return response
    } catch (err) {
        console.log(err)
    }
}