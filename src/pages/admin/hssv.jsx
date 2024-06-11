import { useEffect, useState } from "react";
import DefaultLayout from "../../components/DefaultLayout"
import { getAllStudents } from "../../api/student";
const Hssv = () => {
    const [name, setName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [sex, setSex] = useState('')
    const [major, setMajor] = useState('')
    const [data, setData] = useState({})
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const Label = "HỒ SƠ SINH VIÊN"
    const defaultsc = " text-white"
    // const defaultsc1 = " text-black"
    
    useEffect(() => {
        ( async () => {
            const response = await getAllStudents()
            if (response.status === 200) {
                setStudents(response.data)
            }
        })()
    }, [])

    

    const item = [
        { label: 'Lập hồ sơ sinh viên', active: true, link: "/hssv" },
        { label: 'Nhập danh sách môn học', link: "/dsmh" },
        { label: 'Nhập chương trình học', link: "/cth" },
        { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
        { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
        { label: 'Lập phiếu thu học phí', link: "/thp" },
        { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
    ]
    const items = [
        { label: 'STT', position: defaultsc },
        { label: 'MSSV', position: defaultsc },
        { label: 'HỌ VÀ TÊN', position: defaultsc },
        { label: 'NGÀY SINH', position: defaultsc },
        { label: 'GIỚI TÍNH', position: defaultsc },
        { label: 'QUÊ QUÁN', position: defaultsc },
        { label: 'ĐỐI TƯỢNG', position: defaultsc },
        { label: 'NGÀNH HỌC', position: defaultsc },
        { label: '', position: defaultsc },
    ]
    const items1 = [
        { label: 'HỌ VÀ TÊN', haveDDM: false, position: 'col-span-2', margin: 'justify-center', mlabel: 'ml-6', state: name, setState: setName },
        { label: 'NGÀY SINH', haveDDM: false, position: 'col-start-1', margin: 'justify-center', mlabel: 'ml-6', state: birthday, setState: setBirthday },
    ]

    const items2 = [
        { label: 'GIỚI TÍNH', haveDDM: true, position: 'col-start-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn giới tính', 'Nam', 'Nữ'], state: sex, setState: setSex },
        // { label: 'TỈNH', haveDDM: true, position: 'col-start-1', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: filterProvineList },
        // { label: 'HUYỆN', haveDDM: true, position: 'col-start-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: districtList },
        { label: 'NGÀNH HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', options: ['Chọn ngành học', 'Kỹ thuật phần mềm', 'Khoa học máy tính'], state: major, setState: setMajor },
    ]



    return (
        <DefaultLayout loading={loading} setLoading={setLoading} setList = {setStudents} value3={item} value={items} value1={items1} value2={items2} label={Label} value4={students} data = {data} setData = {setData}>
            
        </DefaultLayout>
    )
}
export default Hssv;