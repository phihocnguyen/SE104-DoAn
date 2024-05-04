import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Searchbar from "../components/Searchbar"
const Dkhp = () => {
    const item = [
        { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
        { label: 'Nhập danh sách môn học', link: "/dsmh" },
        { label: 'Nhập chương trình học', link: "/cth" },
        { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
        { label: 'Lập phiếu đăng ký học phần', active: true, link: "/dkhp" },
        { label: 'Lập phiếu thu học phí', link: "/thp" },
        { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
    ]
    const defaultsc = "px-12"
    const items = [
        { label: 'STT', position: defaultsc},
        { label: 'MÃ SỐ SINH VIÊN' , position: defaultsc },
        { label: 'HỌ VÀ TÊN' , position: defaultsc },
        { label: '' , position: defaultsc },
    ]
    const Label = "ĐĂNG KÝ HỌC PHẦN"
    const items1 = [
        { label: 'MÃ SỐ SINH VIÊN', haveDDM: false, position: 'col-span-2', margin: 'justify-center', mlabel: 'ml-6' },
        { label: 'NGÀY LẬP', haveDDM: false, position: 'col-span-2', margin: 'justify-center', mlabel: 'ml-6' },
      ]
      const items2 = [
        { label: 'HỌC KỲ', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Học kỳ 1', 'Học kỳ 2', 'Học kỳ hè'] },
        { label: 'NĂM HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['2023-2024', '2022-2023'] },
      ]
    return (
        <DefaultLayout value3={item} value={items} value1={items1} value2={items2} label={Label}>
            <Searchbar/>
            <h3 className='mt-3 text-gray-800'>DANH SÁCH PHIẾU ĐĂNG KÝ HỌC PHẦN</h3>

        </DefaultLayout>
    )
}
export default Dkhp