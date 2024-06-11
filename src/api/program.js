import axios from "axios";
import { baseURL } from "./config";

export const createProgram = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/program/create`, data)
        return response
    } catch (err) {
        console.log(err)
        return err.response
    }
}

export const getAllPrograms = async () => {
    try {
        const response = await axios.get(`${baseURL}/program/allprograms`)
        return response
    } catch (err) {
        console.log(err)
    }
}
export const deleteProgram = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/program/delete/${id}`)
        return response
    } catch (err) {
        console.log(err)
    }
}