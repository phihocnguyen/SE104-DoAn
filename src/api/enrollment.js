import axios from "axios";
import { baseURL } from "./config";

export const createEnrollment = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/enrollment/create`, data)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getEnrollmentsBySemester = async (data) => {
    try {
        const { hocKy, namHoc } = data
        const response = await axios.get(`${baseURL}/enrollment/allenrollmentsbysemester/?hocKy=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getEnrollmentsByMssv = async (mssv) => {
    try {
        const response = await axios.get(`${baseURL}/enrollment/allenrollmentsbymssv/${mssv}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllEnrollments = async () => {
    try {
        const response = await axios.get(`${baseURL}/enrollment/allenrollments`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}