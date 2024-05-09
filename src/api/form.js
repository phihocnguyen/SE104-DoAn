import axios from "axios";

const base_URL = 'http://localhost:3333/api'

export const createForm = async (data) => {
    try {
        const response = await axios.post(`${base_URL}/form/create`, data)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}

export const getAllFormsBySemester = async ({ hocKy, namHoc }) => {
    try {
        const response = await axios.get(`${base_URL}/form/allformsbysemester/?hocKi=${hocKy}&namHoc=${namHoc}`)
        if (response) return response
    } catch (err) {
        console.log(err)
    }
}