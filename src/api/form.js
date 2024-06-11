import axios from "axios";
import { baseURL } from "./config";

export const createForm = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/form/create`, data)
        if (response) return response
    } catch (err) {
        console.log(err)
        return err.response
    }
}

export const getAllFormsBySemester = async ({ hocKy, namHoc }) => {
    try {
        const response = await axios.get(`${baseURL}/form/allformsbysemester/?hocKi=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}