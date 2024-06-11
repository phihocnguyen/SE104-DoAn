import Nav from "../../components/Nav"
import { useEffect, useState } from "react"
import { getSubjectsBySemester } from "../../api/semester"
import List from "../../components/List"
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createEnrollment, getAllEnrollments } from "../../api/enrollment";
const Svdkhp = () => {

  const [subjectList, setSubjectList] = useState([])
  const [selectionList, setSelectionList] = useState([])
  const [enrollmentList, setEnrollmentList] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const notify = () => toast.success('Đăng kí học phần thành công !!!', {});

  useEffect(() => {
    try {
      const info = localStorage.getItem('info')
      if (info) {
        setUser(JSON.parse(info))
      }
    } catch (err) {
      console.log(err)
    }
  }, [])


  const handleSubmit = () => {
    confirmAlert({
      title: 'Xác nhận đăng ký học phần',
      message: 'Bạn có chắc chắn với đăng ký của mình không?.',
      buttons: [
        {
          label: 'Xác nhận',
          onClick: async () => {
            try {
              for (let i = 0; i < selectionList.length; i++){
                  const data = {
                    mssv: user.mssv,
                    maMonHoc: selectionList[i].maMonHoc,
                    hocKi: 1,
                    namHoc: '2023-2024',
                    state: 'Chưa tạo phiếu'
                  }
                  const response = await createEnrollment(data)
                  if (response.status === 201) setEnrollmentList(prevState => [...prevState, response.data])
              }
              notify()
            } catch (err) {
              console.log(err)
            }
          }
        },
        {
          label: 'Hủy bỏ'
        }
      ]
    });
  };

  const handleCheckBox = (e,item) => {
      if (e.currentTarget.checked) {
        setSelectionList(prevState => [...prevState, item])
      } else {
        setSelectionList(prevState => prevState.filter(state => state.maMonHoc != item.maMonHoc))
      }
  }

  useEffect(() => {
      (async () => {
        try {
          let response = await getSubjectsBySemester({
            hocKy: 'Học kỳ 1',
            namHoc: '2023-2024'
          })
          if (response.status === 200) setSubjectList(response.data)

          response = await getAllEnrollments()
          if (response.status === 200) setEnrollmentList(response.data)
        } catch (err) {
          console.log(err)
        }
      })()
  }, [])

  const item = [
    { label: 'Đăng ký học phần', active: true, link: "/student/svdkhp" },
    { label: 'Thông tin học phí', link: "/student/tthp" },
  ]
  const defaultsc = " text-white"
  const items = [
    { label: 'STT', position: defaultsc },
    { label: 'MÔN HỌC', position: defaultsc },
    { label: 'LOẠI MÔN', position: defaultsc },
    { label: 'TÍN CHỈ', position: defaultsc },
    { label: '', position: defaultsc}
  ]
  // const items1 = [
  //   { label: '1', position: defaultsc1 },
  //   { label: 'Nhập môn công nghệ phần mềm', position: defaultsc1 },
  //   { label: 'Cơ sở ngành', position: defaultsc1 },
  //   { label: '4', position: defaultsc1 },
  //   { label: 'Chọn', type: 'button', position: 'rounded-[10px] justify-center w-1/2 h-[35px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center ' },
  // ]
  const items3 = [
    { label: 'STT', position: defaultsc },
    { label: 'MÔN HỌC', position: defaultsc },
    { label: 'LOẠI MÔN', position: defaultsc },
    { label: 'TÍN CHỈ', position: defaultsc },
  ]
  return (  
    <div className='grid grid-cols-12'>
      <Nav items={item} loading={loading} setLoading={setLoading} />
      <main className='grid col-span-8'>
        <div className="mb-5">
          <div className="flex">
          <h3 className='mt-3 w-2/6 text-gray-800'>DANH SÁCH MÔN HỌC</h3>
          <button onClick={handleSubmit} className='mt-3 rounded-[10px] ml-[39rem] justify-center w-1/6 h-[40px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
            <h3 className='absolute text-[12px]'>XÁC NHẬN</h3>
          </button>
          </div>
          {/* <List items={items} items1={subjectList} />
           */}
           <div className="mt-5 h-[250px] overflow-hidden overflow-y-scroll">
                <table className="rounded-lg table-fixed w-full  bg-white border border-gray-800  ">
                  <thead className="h-[20%] bg-gray-800 rounded-t-lg h-18">
                      <tr className='w-full px-4 py-3 flex justify-start items-center '>
                          {items.map((item, index) => (
                            <th key = {index} className={`w-1/4`} >
                              <div className={`text-white mt-2 mb-2 flex justify-center items-center`}>
                                <div className="text-[0.65rem] ">{item.label}</div>
                              </div>
                            </th>
                          ))}
                      </tr>
                  </thead>
                  <tbody >
                      {subjectList.map((item, index) => (
                          <tr key = {index} className="px-4 py-3 flex items-center">
                              <th className={`w-1/4`} >
                                  <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                      <div className="text-[0.65rem] ">{index+1}</div>
                                  </div>
                              </th>
                              <th className={`w-1/4`} >
                                  <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                      <div className="text-[0.65rem] ">{item.tenMonHoc}</div>
                                  </div>
                              </th>
                              <th className={`w-1/4`} >
                                  <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                      <div className="text-[0.65rem] ">{item.loaiMon}</div>
                                  </div>
                              </th>
                              <th className={`w-1/4`} >
                                  <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                      <div className="text-[0.65rem] ">{item.tinChi}</div>
                                  </div>
                              </th>
                              <th className={`w-1/4`} >
                                  <input onChange={(e) => handleCheckBox(e,item) } type='checkbox'/>
                              </th>
                          </tr>
                      ))}
                  </tbody>
            </table>
           </div>
        </div>
        <div className="h-[230px]">
          <h3 className=' text-gray-800'>DANH SÁCH MÔN ĐÃ ĐĂNG KÝ</h3>
          <List items={items3} items1={enrollmentList} />
        </div>
      </main>
    </div>
  )
}
export default Svdkhp