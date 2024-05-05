import React from "react"
import DefaultLayout from "../components/DefaultLayout"
const Hssv = () => {
    const item = [
        { label: 'Lập hồ sơ sinh viên', active: true, link: "/hssv" },
        { label: 'Nhập danh sách môn học', link: "/dsmh" },
        { label: 'Nhập chương trình học', link: "/cth" },
        { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
        { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
        { label: 'Lập phiếu thu học phí', link: "/thp" },
        { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
    ]
    const Label = "HỒ SƠ SINH VIÊN"
    const defaultsc = " text-white"
  const defaultsc1 = " text-black"
    const items = [
        { label: 'STT', position: defaultsc },
        { label: 'HỌ VÀ TÊN', position: defaultsc },
        { label: 'NGÀY SINH', position: defaultsc },
        { label: 'GIỚI TÍNH', position: defaultsc },
        { label: 'QUÊ QUÁN', position: defaultsc },
        { label: 'ĐỐI TƯỢNG', position: defaultsc },
        { label: 'NGÀNH HỌC', position: defaultsc },
        { label: '', position: defaultsc },
    ]
    const items3 = [
        { label: '1', position: defaultsc1 },
        { label: 'Lê Ngọc Bảo Minh', position: defaultsc1 },
        { label: '02/06/2004', position: defaultsc1 },
        { label: 'Nam', position: defaultsc1 },
        { label: 'Thăng Bình, Quảng Nam', position: defaultsc1 },
        { label: 'Không', position: defaultsc1 },
        { label: 'Kỹ thuật phần mềm', position: defaultsc1 },
        { label: '', position: defaultsc1 },
    ]
    const items1 = [
        { label: 'HỌ VÀ TÊN', haveDDM: false, position: 'col-span-2', margin: 'justify-center', mlabel: 'ml-6' },
        { label: 'NGÀY SINH', haveDDM: false, position: 'col-start-1 w-1/2', margin: 'justify-end mr-2', mlabel: 'ml-6' },
    ]

    const items2 = [
        { label: 'GIỚI TÍNH', haveDDM: true, position: 'col-start-2 w-1/2', margin: 'justify-start ml-2', marrow: 'mr-4', mlabel: 'ml-2', options: ['Nam', 'Nữ'] },
        { label: 'TỈNH', haveDDM: true, position: 'col-start-1 w-1/2', margin: 'justify-end mr-2', marrow: 'ml-2', mlabel: 'ml-6', options: ['Quảng Nam', 'TP Hồ Chí Minh'] },
        { label: 'HUYỆN', haveDDM: true, position: 'col-start-2 w-1/2', margin: 'justify-start ml-2', marrow: 'mr-4', mlabel: 'ml-2', options: ['Quận 1', 'Quận 2'] },
        { label: 'NGÀNH HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Kỹ thuật phần mềm', 'Khoa học máy tính'] },
    ]
    return (
        <DefaultLayout value3={item} value={items} value1={items1} value2={items2} label={Label} value4={items3}>
        </DefaultLayout>
    )
}
export default Hssv;