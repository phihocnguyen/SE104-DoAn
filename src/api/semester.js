import axios from "axios";

const base_URL = 'http://localhost:3333/api'

export const createSemester = async (data) => {
    try {
        const response = await axios.post(`${base_URL}/semester/create`, data)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllSemesters = async () => {
    try {
        const response = await axios.get(`${base_URL}/semester/allsemesters`)
        return response
    } catch (err) {
        console.log(err)
    }
}