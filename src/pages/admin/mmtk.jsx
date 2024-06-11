import { useEffect, useState } from "react"
import DefaultLayout from "../../components/DefaultLayout"
import { getAllSemesters } from "../../api/semester";
const Mmtk = () => {
  const [semester, setSemester] = useState('')
  const [schoolYear, setSchoolYear] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseList, setCourseList] = useState(['Chọn môn học'])
  const [semesterList, setSemesterList] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      (async () => {
          try {
            let response = await getAllSemesters()
            if (response.status === 200) {
              let data = response.data
              setSemesterList(data)
            }
          }  catch (err) {
            console.log(err)
          }
      })()
  }, [data])

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
  const items = [
    { label: 'STT', position: defaultsc },
    { label: 'ID', position: defaultsc },
    { label: 'HỌC KỲ', position: defaultsc },
    { label: 'NĂM HỌC', position: defaultsc },
    { label: 'TÊN MÔN HỌC', position: defaultsc },
    { label: '', position: defaultsc },
  ]
  
  const Label = "MÔN HỌC MỞ TRONG KỲ"
  const items1 = [

  ]

  const items2 = [
    { label: 'HỌC KỲ', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn học kỳ', 'Học kỳ 1', 'Học kỳ 2', 'Học kì hè'], state: semester, setState: setSemester, setCourseList: setCourseList },
    { label: 'NĂM HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn năm học', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026'], state: schoolYear, setState: setSchoolYear },
    { label: 'TÊN MÔN HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: courseList, state: courseName, setState: setCourseName },
  ]
  return (
    <DefaultLayout loading={loading} setLoading={setLoading} value3={item} value={items} value1={items1} value2={items2} label={Label} value4={semesterList} setList={setSemesterList} data={data} setData={setData} >
    </DefaultLayout>
  )
}
export default Mmtk