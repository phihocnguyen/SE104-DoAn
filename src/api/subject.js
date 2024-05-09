import axios from "axios";

const base_URL = 'http://localhost:3333/api/'

export const createSubject = async (data) => {
    try {
        const response = await axios.post(`${base_URL}/subject/create`, data)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllSubjects = async () => {
    try {
        const response = await axios.get(`${base_URL}/subject/allsubjects`)
        return response
    } catch (err) {
        console.log(err)
    }
}