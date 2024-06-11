import { useState } from "react"
import DefaultLayout from "../../components/DefaultLayout"
import Searchbar from "../../components/Searchbar"
import List from "../../components/List"
const Thp = () => {

    const [soPhieu, setSoPhieu] = useState('')
    const [date, setDate] = useState('')
    const [mssv, setMssv] = useState('')
    const [data, setData] = useState([])
    const [list, setList] = useState([])
    const [enrollments, setEnrollments] = useState([])
    const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     (async () => {
    //       let response = await getAllReceipts()
    //       if (response.status === 200) {
    //         setList(response.data)
    //       }
    //     })()
    // }, [])

    const item = [
        { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
        { label: 'Nhập danh sách môn học', link: "/dsmh" },
        { label: 'Nhập chương trình học', link: "/cth" },
        { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
        { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
        { label: 'Lập phiếu thu học phí', active: true, link: "/thp" },
        { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
    ]
    const defaultsc = " text-white"
    const items = [
        { label: 'STT',position: defaultsc},
        { label: 'SỐ PHIẾU',position: defaultsc  },
        { label: 'MSSV',position: defaultsc  },
        { label: 'NGÀY LẬP',position: defaultsc  },
        { label: 'TỔNG SỐ TIỀN',position: defaultsc  },
    ]
    
    const Label = "THU HỌC PHÍ"
    const items1 = [
      { label: 'SỐ PHIẾU', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', state: soPhieu, setState: setSoPhieu  },
      { label: 'NGÀY LẬP', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', state: date, setState: setDate},
      { label: 'MÃ SỐ SINH VIÊN', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6', state: mssv, setState: setMssv},
      ]
      
      const items2 = [

      ]

      const items3 = [
        { label: 'STT',position: defaultsc},
        { label: 'SỐ PHIẾU',position: defaultsc  },
        { label: 'MSSV',position: defaultsc  },
        { label: 'NGÀY LẬP',position: defaultsc  },
        { label: 'TRẠNG THÁI',position: defaultsc  }
      ]
    return (
      <>
        <DefaultLayout loading={loading} setLoading={setLoading} value3={item} value={items3} value1={items1} value2={items2} label={Label} value4={enrollments} data={data} setData={setData} setList={setList} >
          <Searchbar setLoading={setLoading} setList={setEnrollments} setList1={setList}/>
          <h3 className='mt-3 text-gray-800'>DANH SÁCH PHIẾU THU HỌC PHÍ</h3>
          <List items={items} items1={list} />
          <h3 className='mt-3 text-gray-800'>DANH SÁCH PHIẾU ĐĂNG KÝ HỌC PHẦN</h3>
        </DefaultLayout>
        
      </>
    )
}
export default Thp