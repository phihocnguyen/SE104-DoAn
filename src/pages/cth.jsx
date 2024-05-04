import React from "react"
import DefaultLayout from "../components/DefaultLayout"
const Cth = () => {
    const item = [
        { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
        { label: 'Nhập danh sách môn học', link: "/dsmh" },
        { label: 'Nhập chương trình học', active: true, link: "/cth" },
        { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
        { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
        { label: 'Lập phiếu thu học phí', link: "/thp" },
        { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
    ]
    const defaultsc = "px-8"
    const items = [
        { label: 'STT', position: defaultsc},
        { label: 'NGÀNH HỌC', position: defaultsc  },
        { label: 'KHOA', position: defaultsc  },
        { label: 'HỌC KỲ' , position: defaultsc },
        { label: 'TÊN MÔN HỌC'  , position: defaultsc},
        { label: '' , position: defaultsc },
    ]
    const Label = "CHƯƠNG TRÌNH HỌC"
    
    const items1 = [
       
      ]
      
      const items2 = [
        { label: 'NGÀNH HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Nam', 'Nữ'] },
        { label: 'KHOA', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quảng Nam', 'TP Hồ Chí Minh'] },
        { label: 'HỌC KỲ', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quận 1', 'Quận 2'] },
        { label: 'TÊN MÔN HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Kỹ thuật phần mềm', 'Khoa học máy tính'] },
      ]
    return (
        <DefaultLayout value3={item} value={items} value1={items1} value2={items2} label={Label}>
        </DefaultLayout>
    )
}
export default Cth