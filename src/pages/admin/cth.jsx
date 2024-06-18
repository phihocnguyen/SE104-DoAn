import { useEffect, useState } from "react"
import DefaultLayout from "../../components/DefaultLayout"
// import { FaTrash } from "react-icons/fa";
// import { FaPen } from "react-icons/fa";
import { getAllSubjects } from "../../api/subject";
import { getAllPrograms } from "../../api/program";
const Cth = () => {
  const [major, setMajor] = useState('')
  const [department, setDepartment] = useState('')
  const [semester, setSemester] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseList, setCourseList] = useState([])
  const [data, setData] = useState([])
  const [programList, setProgramList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    (async () => {
      try {
          let response = await getAllSubjects()
          if (response.status === 200) {
              let data = response.data.map((course) => course.tenMonHoc)
              data.unshift('Chọn môn học')
              setCourseList(data)
            }

            response = await getAllPrograms()
            if (response.status === 200) {
              let data = response.data
              setProgramList(data)
            }
          }  catch (err) {
            console.log(err)
          }
      })()

      


  }, [])


  const item = [
    { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
    { label: 'Nhập danh sách môn học', link: "/dsmh" },
    { label: 'Nhập chương trình học', active: true, link: "/cth" },
    { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
    { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
    { label: 'Lập phiếu thu học phí', link: "/thp" },
    { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
  ]
  const defaultsc = " text-white"
  // const defaultsc1 = " text-black"
  const items = [
    { label: 'STT', position: defaultsc },
    { label: 'ID', position: defaultsc },
    { label: 'NGÀNH HỌC', position: defaultsc },
    { label: 'KHOA', position: defaultsc },
    { label: 'HỌC KỲ', position: defaultsc },
    { label: 'TÊN MÔN HỌC', position: defaultsc },
    { label: '', position: defaultsc },
  ]
  
  const Label = "CHƯƠNG TRÌNH HỌC"

  const items1 = [

  ]

  const items2 = [
    { label: 'NGÀNH HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn ngành học', 'Kỹ thuật phần mềm', 'Khoa học máy tính', 'Kĩ thuật máy tính', 'Công nghệ thông tin', 'CNTT-VN'], state: major, setState: setMajor },
    { label: 'KHOA', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn khoa', 'Khoa học máy tính', 'Công nghệ phần mềm', 'Kĩ thuật máy tính', 'Khoa học & Kỹ thuật thông tin'], state: department, setState: setDepartment },
    { label: 'HỌC KỲ', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn học kỳ', 'Học kỳ 1', 'Học kỳ 2', 'Học kỳ hè'], state: semester, setState: setSemester },
    { label: 'TÊN MÔN HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: courseList, state: courseName, setState: setCourseName },
  ]
  return (
    <DefaultLayout loading={loading} setLoading={setLoading} value3={item} value={items} value1={items1} value2={items2} label={Label} value4={programList} setList = {setProgramList} setData={setData} data = {data} >
    </DefaultLayout>
  )
}
export default Cth