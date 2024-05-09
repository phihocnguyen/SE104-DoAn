import axios from "axios";

const base_URL = 'http://localhost:3333/api'

export const createReceipt = async (data) => {
    try {
        const response = await axios.post(`${base_URL}/fee/create`, data)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllReceipts = async () => {
    try {
        const response = await axios.get(`${base_URL}/fee/allreceipts`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getStudentsNotPaid = async ({ hocKy, namHoc }) => {
    try {
        const response = await axios.get(`${base_URL}/fee/studentsnotpaid/?hocKi=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}