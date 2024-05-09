import axios from 'axios'

const baseURL = 'http://localhost:3333/api'

export const createStudent = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/student/create`, data, {
            withCredentials: true
        })
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllStudents = async () => {
    try {
        const response = await axios.get(`${baseURL}/student/allstudents`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}