import React from "react"
import DefaultLayout from "../components/DefaultLayout"
import Searchbar from "../components/Searchbar"
const Thp = () => {
    const item = [
        { label: 'Lập hồ sơ sinh viên', link: "/hssv" },
        { label: 'Nhập danh sách môn học', link: "/dsmh" },
        { label: 'Nhập chương trình học', link: "/cth" },
        { label: 'Nhập môn học mở trong học kì', link: "/mmtk" },
        { label: 'Lập phiếu đăng ký học phần', link: "/dkhp" },
        { label: 'Lập phiếu thu học phí', active: true, link: "/thp" },
        { label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/Svcdhp" },
    ]
    const defaultsc = "px-10"
    const items = [
        { label: 'STT',position: defaultsc},
        { label: 'SỐ PHIẾU',position: defaultsc  },
        { label: 'MSSV',position: defaultsc  },
        { label: 'NGÀY LẬP',position: defaultsc  },
        { label: 'TỔNG SỐ TIỀN',position: defaultsc  },
    ]
    const Label = "THU HỌC PHÍ"
    const items1 = [
      { label: 'SỐ PHIẾU', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6'  },
      { label: 'NGÀY LẬP', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6'},
      { label: 'MÃ SỐ SINH VIÊN', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6'},
      { label: 'SỐ TIỀN THU', haveDDM: false, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-4', mlabel: 'ml-6' },
      ]
      
      const items2 = [
       
      ]
    return (
        <DefaultLayout value3={item} value={items} value1={items1} value2={items2} label={Label}>
          <Searchbar/>
        </DefaultLayout>
    )
}
export default Thp