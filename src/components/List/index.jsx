/* eslint-disable react/prop-types */
import { FaPen, FaTrash } from 'react-icons/fa'
import ListItem from '../List/ListItem'
import React, { useEffect, useState } from 'react'
import EditModal from '../EditModal'
import { useLocation } from 'react-router-dom'
import Modal from '../Modal'
import { deleteEnrollment, getEnrollmentsByMssv } from '../../api/enrollment'
import { confirmAlert } from 'react-confirm-alert'
import { deleteStudent } from '../../api/student'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import { deleteSubject } from '../../api/subject'
import { deleteProgram } from '../../api/program'
import { deleteSemester } from '../../api/semester'
import { AiFillDelete } from 'react-icons/ai'
const ListItemsContainer = ({ items }) => (
    <>
        {items.map((item, index) => (
            <ListItem item={item} key={index} />
        ))} 
    </>
)
const List = ({ items, items1, setLoading, setEnrollmentList }) => {
    const [openModal, setOpenModal] = useState(false)
    const [detail, setDetail] = useState([])
    const [editModal, setEditModal] = useState(false)
    const [editData, setEditData] = useState()
    const [data, setData] = useState([])
    const location = useLocation()
    let height = 700
    let unit = 'px'
    let columns = []
    const notify = () => toast.success('Xóa thành công !!!')
    useEffect(() => {
        setData(items1)
    }, [items1])
    
    const handleSubmit = (item) => {
    confirmAlert({
      message: 'Bạn có chắc chắn muốn xóa không ?',
      buttons: [
        {
          label: 'Xác nhận',
          onClick: async () => {
            handleDelete(item)
          }
        },
        {
          label: 'Hủy bỏ'
        }
      ]
    });
    };

    const handleDelete = async (item) => {
        try {
            switch(location.pathname) {
                case '/hssv': {
                    const response = await deleteStudent(item.mssv)
                    if (response) {
                        notify()
                        setData(prevState => [...prevState.filter(state => state.mssv != item.mssv)])
                    } 
                    break
                }
                case '/dsmh': {
                    const response = await deleteSubject(item.maMonHoc)
                    if (response) {
                        notify()
                        setData(prevState => [...prevState.filter(state => state.maMonHoc != item.maMonHoc)])
                    } 
                    break
                }
                case '/cth': {
                    const response = await deleteProgram(item.id)
                    if (response) {
                        notify()
                        setData(prevState => [...prevState.filter(state => state.id != item.id)])
                    } 
                    break
                }
                case '/mmtk': {
                    const response = await deleteSemester(item.id)
                    if (response) {
                        notify()
                        setData(prevState => [...prevState.filter(state => state.id != item.id)])
                    } 
                    break
                }
                
            }
        } catch (err) {
            console.log(err)
        }
    }
    switch(location.pathname) {
        case '/hssv': {
            columns = ['', 'mssv','hoTen', 'ngaySinh', 'gioiTinh', 'queQuan', 'doiTuong', 'nganhHoc', 'utils']
            break
        }
        case '/dsmh': {
            columns = ['', 'maMonHoc', 'tenMonHoc', 'loaiMon', 'soTiet', 'utils']
            break
        }
        case '/cth': {
            columns = ['', 'id', 'nganhHoc', 'khoa', 'hocKi', 'tenMonHoc', 'utils']
            break
        }
        case '/mmtk': {
            columns = ['', 'id', 'hocKi', 'namHoc', 'tenMonHoc', 'utils']
            break
        }
        case '/dkhp': {
            columns = ['', 'mssv', 'hoTen', 'chitiet']
            height = 75
            unit = '%'
            break
        }
        case '/thp': {
            columns = ['', 'soPhieu', 'mssv', 'ngayLap', 'soTienThu']
            height = 240
            break
        }
        case '/Svcdhp': {
            columns = ['', 'mssv', 'soTienThu', 'soTienPhaiDong', 'soTienConLai']
            height = 80
            unit = '%'
            break
        }
        case '/student/svdkhp': {
            columns = ['', 'tenMonHoc', 'loaiMon', 'tinChi', 'xoa']
            height = '80'
            unit = '%'
        }
    }

    const handleDetail = async (mssv) => {
        try {
            setLoading(true)
            const response = await getEnrollmentsByMssv(mssv)
            if (response.status === 200) setDetail(response.data)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleDeleteEnrollment = async (maMonHoc) => {
        confirmAlert({
      message: 'Bạn có chắc chắn muốn xóa không ?',
      buttons: [
        {
          label: 'Xác nhận',
          onClick: async () => {
            try {
                const response = await deleteEnrollment(maMonHoc)
                setEnrollmentList(prevState => [...prevState.filter(state => state.maMonHoc !== response.data.maMonHoc)])
                notify()
            } catch (err) {
                console.log(err)
            }
          }
        },
        {
          label: 'Hủy bỏ'
        }
      ]
    });
    }

    return (
        <div className={`mt-5 h-[${height}${unit}] overflow-hidden overflow-y-scroll`}>
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
            { openModal &&  
                <>
                    <div className='bg-black w-screen h-screen opacity-50 fixed top-0 left-0 z-[999999]'></div> 
                    <Modal data = {detail} setOpenModal={setOpenModal}/>
                </>
            }
            { editModal &&
                <>
                    <div className='bg-black w-screen h-screen opacity-50 fixed top-0 left-0 z-[999999]'></div> 
                    <EditModal setItems = {setData} data = {editData} setOpenModal={setEditModal}/>
                </>
            }
            <table className="rounded-lg table-fixed  w-full  bg-white border border-gray-800  ">
                <thead className=" bg-gray-800 rounded-t-lg h-18">
                    <tr className=' px-4 py-3 flex justify-start items-center '>
                        <ListItemsContainer items={items} />
                    </tr>
                </thead >
                <tbody className=''>
                    {data.map((item, index1) => (
                        <tr key={index1} className=' px-4 py-3 flex items-center '>
                            {columns.map((column, index2) => (
                                <React.Fragment key={ index2 }>
                                    {column !== 'utils' && column !== 'chitiet' && column !== 'chon' && column !== 'xoa' ? 
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
                                    column === 'chon' ? 
                                        <th className={`w-1/4`} >
                                            {/* <button  className='rounded-[10px] justify-center px-8 py-1 bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center duration-150'>Chọn</button>
                                             */}
                                            {/* <CiCirclePlus onClick={notify} className=' text-[#1d1c34] opacity-25 hover:opacity-100 cursor-pointer duration-150 text-[32px]'/>
                                             */}
                                             <input type="checkbox"/>
                                        </th>
                                    :
                                    column === 'xoa' ? 
                                        <th className={`w-1/4 flex justify-center`} >
                                             <AiFillDelete onClick={() => handleDeleteEnrollment(item.maMonHoc)} className='text-[24px] opacity-50 hover:opacity-100 duration-150 cursor-pointer'/>
                                        </th>
                                    :
                                        <th className={`w-1/4`} >
                                            <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                                <div className="flex justify-center"> <FaPen className='cursor-pointer opacity-50 hover:opacity-100 duratoin-150' onClick={() => {setEditModal(!editModal); setEditData(item)}} /> <FaTrash onClick={() => handleSubmit(item)} className="cursor-pointer opacity-50 hover:opacity-100 duratoin-150 ml-2"/> </div>
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