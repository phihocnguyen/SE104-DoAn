import { useEffect, useState } from "react"
import DefaultLayout from "../../components/DefaultLayout"
import { getAllSubjects } from "../../api/subject";
const Dsmh = () => {
  const [maMH, setMaMH] = useState('')
  const [courseName, setCourseName] = useState('')
  const [type, setType] = useState('')
  const [soTiet, setSoTiet] = useState(0)
  const [data, setData] = useState({})
  const [subjects, setSubjects] = useState([])
  const [loading, setLoading] = useState(true)

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
  const items = [
    { label: 'STT', position: defaultsc },
    { label: 'MÃ MÔN HỌC', position: defaultsc },
    { label: 'TÊN MÔN HỌC', position: defaultsc },
    { label: 'LOẠI MÔN', position: defaultsc },
    { label: 'SỐ TIẾT', position: defaultsc },
    { label: '', position: defaultsc },
  ]
  
  const items1 = [

  ]

  const items2 = [
    { label: 'MÃ MÔN HỌC', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Nam', 'Nữ'], state: maMH, setState: setMaMH },
    { label: 'TÊN MÔN HỌC', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Quảng Nam', 'TP Hồ Chí Minh'], state: courseName, setState: setCourseName },
    { label: 'LOẠI MÔN', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn loại môn', 'Lý thuyết', 'Thực hành' ], state: type, setState: setType },
    { label: 'SỐ TIẾT', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Kỹ thuật phần mềm', 'Khoa học máy tính'], state: soTiet, setState: setSoTiet },
  ]
  return (
    <DefaultLayout loading={loading} setLoading={setLoading} value3={item} value={items} value1={items1} value2={items2} label={Label} value4={subjects} data ={data} setData={setData} setList={setSubjects} >
    </DefaultLayout>
  )
}
export default Dsmh