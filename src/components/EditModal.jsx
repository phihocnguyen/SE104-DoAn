/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { updateStudent } from "../api/student";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useLocation } from "react-router-dom";
import { updateSubject } from "../api/subject";
// eslint-disable-next-line react/prop-types
const EditModal = ({setItems, data, setOpenModal}) => {
    const [result, setResult] = useState(data)
    const location = useLocation()
    const label = ['id', 'createdAt', 'updatedAt', 'soTienDangCo', 'mssv', 'IDtaiKhoan']
    data = Object.keys(data)
    data = data.filter(item => !label.includes(item))
    let temp = [...data]
    for (let i = 0; i < data.length; i++){
        if (data[i] === 'maMonHoc') data[i] = 'Mã môn học'
        else if (data[i] === 'tenMonHoc') data[i] ='Tên môn học'
        else if (data[i] === 'loaiMon') data[i] = 'Loại môn'
        else if (data[i] === 'soTiet') data[i] = 'Số tiết'
        else if (data[i] === 'nganhHoc') data[i] = 'Ngành học'
        else if (data[i] === 'khoa') data[i] = 'Khoa'
        else if (data[i] === 'hocKi') data[i] = 'Học kì'
        else if (data[i] === 'namHoc') data[i] = 'Năm học'
        else if (data[i] === 'hoTen') data[i] = 'Họ tên'
        else if (data[i] === 'gioiTinh') data[i] = 'Giới tính'
        else if (data[i] === 'queQuan') data[i] = 'Quê quán'
        else if (data[i] === 'doiTuong') data[i] = 'Đối tượng'
        else if (data[i] === 'ngaySinh') data[i] = 'Ngày sinh'
    }

    const notify = () => toast.success('Cập nhật sinh viên thành công !!! ', {});

    const handleChangeValue = (key, e)  => {
        let temp = {...result}
        temp[key] = e.target.value
        setResult(temp)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        let response
        try {
            switch(location.pathname) {
                case '/hssv':
                    response = await updateStudent(result.mssv, result)
                    break
                case '/dsmh':
                    response = await updateSubject(result.maMonHoc, result)
                    break
                case '/cth':
                    response = await updateStudent(result.mssv, result)
                    break 
                case '/mmtk':
                    response = await updateStudent(result.mssv, result)
                    break
            }
            if (response){
                setItems(prevState => {
                    for (let i = 0; i < prevState.length; i++){
                        if (prevState[i].mssv && prevState[i].mssv === response.data.mssv) prevState[i] = response.data
                        else if (prevState[i].maMonHoc && prevState[i].maMonHoc === response.data.maMonHoc) prevState[i] = response.data
                    }
                    return prevState
                })
                notify()
            }
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className="px-8 w-[30%] shadow-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md z-[9999999] ">
        <div onClick={() => setOpenModal(prevState => !prevState)}  className="mt-4 mb-4 ml-[auto] w-[40px] rounded-md text-red-500 hover:text-white duration-150 cursor-pointer hover:bg-red-400 flex justify-center "><FaTimes className="text-[24px]"/></div>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            theme="light"
            transition={Bounce}
        />
        <form onSubmit={handleUpdate} className="flex flex-col">
            {data.map((item,index) => {
                return (
                    <div key={index} className='flex flex-col justify-between mb-2'>
                        <div className=''>
                            <div className='flex justify-start'>
                                <h3 className="text-black text-[11px] ">{item}</h3>
                                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
                            </div>
                            <div className='flex'>
                                <input  onChange={e => handleChangeValue(temp[index], e)} value={result[temp[index]]} placeholder='Enter' className=" px-3 py-[12px] bg-white rounded-md border border-neutral-400  block text-[#1d1c34] text-[13px] w-full" type="text" />
                            </div>
                        </div>
                    </div>
                )
            })}
            <button className='rounded-[10px] justify-center w-full my-4 h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center duration-150'>
              <h3 className='absolute z-[9999]'>XÁC NHẬN</h3>
            </button>
        </form>
    </div>
  )
}

export default EditModal