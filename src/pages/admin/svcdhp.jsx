import Nav from "../../components/Nav"
import List from "../../components/List"
import Searchbar from "../../components/Searchbar"
import { useState } from "react"
const Svcdhp = () => {
  const [loading, setLoading] = useState(true)
  const [studentList, setStudentList] = useState([])

  const defaultsc = " text-white"
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
    { label: 'STT', position: defaultsc },
    { label: 'MÃ SỐ SINH VIÊN', position: defaultsc },
    { label: 'SỐ TIỀN ĐĂNG KÝ', position: defaultsc },
    { label: 'SỐ TIỀN PHẢI ĐÓNG', position: defaultsc },
    { label: 'SỐ TIỀN CÒN LẠI', position: defaultsc },
  ]
  return (
    <div className='grid grid-cols-12'>
      <Nav items={item} loading={loading} setLoading={setLoading} />
      <main className='col-span-9 mr-16'>
        <Searchbar setLoading={setLoading} setList={setStudentList}/>
        <List items={items} items1={studentList} />
      </main>
    </div>
  )
}
export default Svcdhp