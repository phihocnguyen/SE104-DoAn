import axios from "axios";
import { baseURL } from "./config";

export const createReceipt = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/fee/create`, data)
        if (response) return response
    } catch (err) {
        console.log(err)
        return err.response
    }
}

export const getAllReceiptsBySemester = async ({hocKy, namHoc}) => {
    try {
        const response = await axios.get(`${baseURL}/fee/allreceipts/?hocKi=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getStudentsNotPaid = async ({ hocKy, namHoc }) => {
    try {
        const response = await axios.get(`${baseURL}/fee/studentsnotpaid/?hocKi=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getReceiptByMssv = async (mssv) => {
    try {
        const response = await axios.get(`${baseURL}/fee/receiptbymssv/${mssv}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const pay = async ({ mssv, soPhieu, price }) => {
    try {
        const response = await axios.put(`${baseURL}/fee/pay/${soPhieu}`, { mssv, price })
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}