import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
const Dsmh = () => {
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
    { label: 'MÃ MÔN HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Nam', 'Nữ'] },
    { label: 'TÊN MÔN HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quảng Nam', 'TP Hồ Chí Minh'] },
    { label: 'LOẠI MÔN', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quận 1', 'Quận 2'] },
    { label: 'SỐ TIẾT', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Kỹ thuật phần mềm', 'Khoa học máy tính'] },
  ]
  return (
    <DefaultLayout value3={item} value={items} value1={items1} value2={items2} label={Label} value4={items3}>
    </DefaultLayout>
  )
}
export default Dsmh