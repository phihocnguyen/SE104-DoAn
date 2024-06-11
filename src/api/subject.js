import axios from "axios";
import { baseURL } from "./config";

export const createSubject = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/subject/create`, data)
        return response
    } catch (err) {
        console.log(err)
        return err.response
    }
}
export const getAllSubjects = async () => {
    try {
        const response = await axios.get(`${baseURL}/subject/allsubjects`)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllSubjectsBySemester = async (semester) => {
    try {
        const response = await axios.get(`${baseURL}/semester/allsubjects/${semester}`)
        console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}

export const updateSubject = async (maMonHoc, data) => {
    try {
        const response = await axios.put(`${baseURL}/subject/edit/${maMonHoc}`, data)
        if (response) return response
    } catch (err) {
        return err.response
    }
}
export const deleteSubject = async (maMonHoc) => {
    try {
        const response = await axios.delete(`${baseURL}/subject/delete/${maMonHoc}`)
        if (response) return response
    } catch (err) {
        return err.response
    }
}