import React, { useEffect, useState } from "react"
import DefaultLayout from "../components/DefaultLayout"
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { getAllSubjects } from "../api/subject";
const Dsmh = () => {
  const [maMH, setMaMH] = useState('')
  const [courseName, setCourseName] = useState('')
  const [type, setType] = useState('')
  const [soTiet, setSoTiet] = useState(0)
  const [data, setData] = useState({})
  const [subjects, setSubjects] = useState([])

  useEffect(() => {
        ( async () => {
            const response = await getAllSubjects()
            if (response.status === 200) {
                setSubjects(response.data)
            }
        })()
    }, [])

  const item = [
    { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
    { label: 'Nhập danh sách môn học', active: true, link: "/dsmh" },
    { label: 'Nhập chương trình học', link: "/cth" },
    { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
    { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
    { label: 'Lập phiếu thu học phí', link: "/thp" },
    { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
  ]
  const Label = "DANH SÁCH MÔN HỌC"
  const defaultsc = " text-white"
  const defaultsc1 = " text-black"
  const items = [
    { label: 'STT', position: defaultsc },
    { label: 'MÃ MÔN HỌC', position: defaultsc },
    { label: 'TÊN MÔN HỌC', position: defaultsc },
    { label: 'LOẠI MÔN', position: defaultsc },
    { label: 'SỐ TIẾT', position: defaultsc },
    { label: '', position: defaultsc },
  ]
  const items3 = [
    { label: 'STT', position: defaultsc1 },
    { label: 'MÃ MÔN HỌC', position: defaultsc1 },
    { label: 'TÊN MÔN HỌC', position: defaultsc1 },
    { label: 'LOẠI MÔN', position: defaultsc1 },
    { label: 'SỐ TIẾT', position: defaultsc1 },
    { label: <div className="flex justify-center"> <FaPen/> <FaTrash className="ml-2"/> </div>, type:'button', position: defaultsc1 },
  ]
  const items1 = [

  ]

  const items2 = [
    { label: 'MÃ MÔN HỌC', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Nam', 'Nữ'], state: maMH, setState: setMaMH },
    { label: 'TÊN MÔN HỌC', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quảng Nam', 'TP Hồ Chí Minh'], state: courseName, setState: setCourseName },
    { label: 'LOẠI MÔN', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quận 1', 'Quận 2'], state: type, setState: setType },
    { label: 'SỐ TIẾT', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Kỹ thuật phần mềm', 'Khoa học máy tính'], state: soTiet, setState: setSoTiet },
  ]
  return (
    <DefaultLayout value3={item} value={items} value1={items1} value2={items2} label={Label} value4={subjects} data ={data} setData={setData} setList={setSubjects} >
    </DefaultLayout>
  )
}
export default Dsmh