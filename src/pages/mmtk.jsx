import React from "react"
import DefaultLayout from "../components/DefaultLayout"
const Mmtk = () => {
  const item = [
    { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
    { label: 'Nhập danh sách môn học', link: "/dsmh" },
    { label: 'Nhập chương trình học', link: "/cth" },
    { label: 'Nhập môn học mở trong học kì', active: true, link: "/mmtk" },
    { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
    { label: 'Lập phiếu thu học phí', link: "/thp" },
    { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
  ]
  const defaultsc = " text-white"
  const defaultsc1 = " text-black"
  const items = [
    { label: 'STT', position: defaultsc },
    { label: 'HỌC KỲ', position: defaultsc },
    { label: 'NĂM HỌC', position: defaultsc },
    { label: 'TÊN MÔN HỌC', position: defaultsc },
    { label: '', position: defaultsc },
  ]
  const items3 = [
    { label: 'STT', position: defaultsc1 },
    { label: 'HỌC KỲ', position: defaultsc1 },
    { label: 'NĂM HỌC', position: defaultsc1 },
    { label: 'TÊN MÔN HỌC', position: defaultsc1 },
    { label: '', position: defaultsc1 },
  ]
  const Label = "MÔN HỌC MỞ TRONG KỲ"
  const items1 = [

  ]

  const items2 = [
    { label: 'HỌC KỲ', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Nam', 'Nữ'] },
    { label: 'NĂM HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quảng Nam', 'TP Hồ Chí Minh'] },
    { label: 'TÊN MÔN HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Kỹ thuật phần mềm', 'Khoa học máy tính'] },
  ]
  return (
    <DefaultLayout value3={item} value={items} value1={items1} value2={items2} label={Label} value4={items3}>
    </DefaultLayout>
  )
}
export default Mmtk