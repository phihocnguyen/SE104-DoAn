import axios from "axios";
import { baseURL } from "./config";

export const createSemester = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/semester/create`, data)
        if (response) return response
    } catch (err) {
        console.log(err)
        return err.response
    }
}

export const getAllSemesters = async () => {
    try {
        const response = await axios.get(`${baseURL}/semester/allsemesters`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getSubjectsBySemester = async ({ hocKy, namHoc }) => {
    try {
        const response = await axios.get(`${baseURL}/semester/subjectsbysemester/?hocKy=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}
export const deleteSemester = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/semester/delete/${id}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}