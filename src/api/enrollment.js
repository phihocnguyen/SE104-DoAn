import axios from "axios";
const base_URL = 'http://localhost:3333/api'

export const getEnrollmentsBySemester = async (data) => {
    try {
        const { hocKy, namHoc } = data
        const response = await axios.get(`${base_URL}/enrollment/allenrollmentsbysemester/?hocKy=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getEnrollmentsByMssv = async (mssv) => {
    try {
        const response = await axios.get(`${base_URL}/enrollment/allenrollmentsbymssv/${mssv}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllEnrollments = async () => {
    try {
        const response = await axios.get(`${base_URL}/enrollment/allenrollments`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}