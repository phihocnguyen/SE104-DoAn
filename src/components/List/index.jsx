/* eslint-disable react/prop-types */
import { FaPen, FaTrash } from 'react-icons/fa'
import ListItem from '../List/ListItem'
import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'
import Modal from '../Modal'
import { getEnrollmentsByMssv } from '../../api/enrollment'
const ListItemsContainer = ({ items }) => (
    <>
        {items.map((item, index) => (
            <ListItem item={item} key={index} />
        ))} 
    </>
)
const List = ({ items, items1 }) => {
    const [openModal, setOpenModal] = useState(false)
    const [detail, setDetail] = useState([])
    const location = useLocation()
    let columns = []

    switch(location.pathname) {
        case '/hssv': {
            columns = ['', 'hoTen', 'ngaySinh', 'gioiTinh', 'queQuan', 'doiTuong', 'nganhHoc', 'utils']
            break
        }
        case '/dsmh': {
            columns = ['', 'maMonHoc', 'tenMonHoc', 'loaiMon', 'soTiet', 'utils']
            break
        }
        case '/cth': {
            columns = ['', 'nganhHoc', 'khoa', 'hocKi', 'tenMonHoc', 'utils']
            break
        }
        case '/mmtk': {
            columns = ['', 'hocKi', 'namHoc', 'tenMonHoc', 'utils']
            break
        }
        case '/dkhp': {
            columns = ['', 'mssv', 'hoTen', 'chitiet']
            break
        }
        case '/thp': {
            columns = ['', 'soPhieu', 'mssv', 'ngayLap', 'soTienThu']
            break
        }
        case '/Svcdhp': {
            columns = ['', 'mssv', 'soTienThu', 'soTienPhaiDong', 'soTienConLai']
            break
        }
    }

    const handleDetail = async (mssv) => {
        try {
            const response = await getEnrollmentsByMssv(mssv)
            console.log(response)
            if (response.status === 200) setDetail(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className=" mt-5 max-h-[250px] overflow-hidden overflow-y-scroll">
            { openModal &&  
                <>
                    <div className='bg-black w-screen h-screen opacity-50 fixed top-0 left-0 z-[999999]'></div> 
                    <Modal data = {detail} setOpenModal={setOpenModal}/>
                </>
            }
            <table className="rounded-lg table-fixed max-h-[50%] w-full  bg-white border border-gray-800  ">
                <thead className="h-[20%] bg-gray-800 rounded-t-lg h-18">
                    <tr className=' px-4 py-3 flex justify-start items-center '>
                        <ListItemsContainer items={items} />
                    </tr>
                </thead >
                <tbody className=''>
                    {items1.map((item, index1) => (
                        <tr key={index1} className=' px-4 py-3 flex items-center '>
                            {columns.map((column, index2) => (
                                <React.Fragment key={ index2 }>
                                    {column !== 'utils' && column !== 'chitiet' ? 
                                        <th className={`w-1/4`} >
                                            <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                                <div className="text-[0.65rem] ">{column === '' ? index1 + 1 : item[`${column}`] }</div>
                                            </div>
                                        </th>
                                     :
                                    column === 'chitiet' ?
                                        <th className={`w-1/4`} >
                                            <button onClick={() => {handleDetail(item.mssv); setOpenModal(!openModal)}} className='text-[12px] rounded-md px-2 py-1 bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent'>Xem chi tiết</button>
                                        </th>
                                    :
                                        <th className={`w-1/4`} >
                                            <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                                <div className="flex justify-center"> <FaPen/> <FaTrash className="ml-2"/> </div>
                                            </div>
                                        </th>
                                    }
                                </React.Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
export default List