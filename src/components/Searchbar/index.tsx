import React, { useState } from "react"
import { RiArrowDropDownLine } from 'react-icons/ri';
import { getEnrollmentsBySemester } from "../../api/enrollment";
import { useLocation } from "react-router-dom";
import { getAllFormsBySemester } from "../../api/form";
import { getStudentsNotPaid } from "../../api/fee";
const Searchbar = ({setList}) => {
    const [hocKy, setHocKy] = useState('')
    const [namHoc, setNamHoc] = useState('')
    const location = useLocation()
    const handleSearch = async () => {
        try {
            if(location.pathname === '/dkhp') {
                const response = await getEnrollmentsBySemester({hocKy, namHoc})
                if (response?.status === 200) setList(response.data) 
            } else if (location.pathname === '/thp') {
                const response = await getAllFormsBySemester({hocKy, namHoc})
                if (response?.status === 200) {
                    for (let i = 0; i < response.data.length; i++){
                        response.data[i]['soTienThu'] = response.data[i].trangThai
                        delete response.data[i]['trangThai']
                    }
                    setList(response?.data)
                }
            } else {
                const response = await getStudentsNotPaid({hocKy, namHoc})
                if (response?.status === 200) {
                    setList(response?.data)
                }
            }

            
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="grid grid-cols-3 w-full h-[12%] mt-5 bg-gray-800 rounded-lg relative">
            <div className="col-start-1">
                <div className=' flex justify-start'>
                    <h3 className="ml-10 text-white text-[11px]">NĂM HỌC</h3>
                    <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
                </div>
                <div className=' ml-10 relative flex items-center w-5/6'>
                    <select onChange={(e) => setNamHoc(e.target.value)}  className="text-[13px] w-[95%]  bg-white border border-neutral-400 text-gray-700 h-[35px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                            <option>Chọn năm học</option>
                            <option>2023-2024</option>
                            <option>2022-2023</option>
                            <option>2021-2022</option>
                    </select>
                </div>
            </div>
            <div className="col-start-2">
                <div className=' flex justify-start'>
                    <h3 className="ml-10 text-white text-[11px]">HỌC KỲ</h3>
                    <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
                </div>
                <div className=' ml-10 relative flex items-center w-5/6'>
                    <select onChange={e => setHocKy(e.target.value)} className="text-[13px] w-[95%]  bg-white border border-neutral-400 text-gray-700 h-[35px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                            <option>Chọn học kỳ</option>
                            <option>Học kỳ 1</option>
                            <option>Học kỳ 2</option>
                            <option>Học kỳ hè</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-center mt-9">
                <button onClick={() => {handleSearch()}} className="h-[35px] col-start-3 rounded-[10px] justify-center w-5/6 bg-white hover:bg-[#1d1c34] hover:text-white border hover:border-white flex items-center"> 
                    TÌM KIẾM
                </button>
            </div>
        </div>
    )
}
export default Searchbar