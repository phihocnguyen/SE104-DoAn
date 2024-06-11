import axios from 'axios'
import { baseURL } from './config'

export const createStudent = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/student/create`, data, {
            withCredentials: true
        })
        if (response) return response
    } catch (err) {
        console.log(err)
        return err.response
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

export const getStudent = async (mssv) => {
    try {
        const response = await axios.get(`${baseURL}/student/detail/${mssv}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const updateStudent = async (mssv, data) => {
    try {
        const response = await axios.put(`${baseURL}/student/edit/${mssv}`, data)
        if (response) return response
    } catch (err) {
        return err.response
    }
}

export const deleteStudent = async (mssv) => {
    try {
        const response = await axios.delete(`${baseURL}/student/delete/${mssv}`)
        if (response) return response
    } catch (err) {
        return err.response
    }
}