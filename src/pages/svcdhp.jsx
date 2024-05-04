import React from "react"
import Nav from "../components/Nav"
import List from "../components/List"
import Searchbar from "../components/Searchbar"
const Svcdhp = () => {
  const defaultsc = "px-11"
    const item = [
        { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
        { label: 'Nhập danh sách môn học', link: "/dsmh" },
        { label: 'Nhập chương trình học', link: "/cth" },
        { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
        { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
        { label: 'Lập phiếu thu học phí', link: "/thp" },
        { label: 'Lập báo cáo sinh viên chưa đóng HP', active: true, link: "/Svcdhp" },
    ]
    const items = [
        { label: 'STT', position: defaultsc},
        { label: 'MÃ SỐ SINH VIÊN', position: defaultsc  },
        { label: 'SỐ TIỀN ĐĂNG KÝ', position: defaultsc },
        { label: 'SỐ TIỀN PHẢI ĐÓNG' , position: defaultsc },
        { label: 'SỐ TIỀN CÒN LẠI' , position: defaultsc },
    ]
    return (
      <div className='grid grid-cols-12'>
      <Nav items={item}/>
      <main className='col-span-9 mr-16'>
        <Searchbar/>
        <List className='h-[100px]' items= {items}/>
      </main>
    </div>
    )
}
export default Svcdhp