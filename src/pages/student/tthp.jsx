import { useEffect, useState } from "react"
import Nav from "../../components/Nav"
import { getReceiptByMssv, pay } from "../../api/fee"
import { getStudent } from "../../api/student"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Tthp = () => {
    const [loading ,setLoading] = useState(true)
    const [data, setData] = useState([])
    const [student, setStudent] = useState({})
    const [price, setPrice] = useState(0)
    const [complete, setComplete] = useState(false)
    const notify = () => toast.success('Đóng học phí thành công !!!', {});

    useEffect(() => {
        (async () => {
            try {
                const student = JSON.parse(localStorage.getItem('info'))
                const student1 = await getStudent(student.mssv)
                if(student1.status === 200) setStudent(student1.data)
                const response = await getReceiptByMssv(student.mssv)
                if (response.status === 200) {
                    setData(response.data)
                    if (response.data.soTienConLai == 0) setComplete(true)
                }
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    const handlePay = async () => {
        const info = {
            soPhieu: data.soPhieu,
            mssv: student.mssv,
            price
        }
        const response = await pay(info)
        if (response.status === 200)  {
            setData(response.data[0])
            if (response.data[0].soTienConLai == 0) setComplete(true)
            setStudent(response.data[1])
        }
        notify()

    }

    const item = [
        { label: 'Đăng ký học phần', link: "/student/svdkhp" },
        { label: 'Thông tin học phí', active: true, link: "/student/tthp" },
    ]
    return (
        <div className='grid grid-cols-12'>
            <Nav items={item} loading={loading} setLoading={setLoading} />
            <main className='col-span-8 grid'>
                <div className="mt-10 flex justify-center ">
                    <h3 className=" font-extrabold">THÔNG TIN HỌC PHÍ</h3>
                </div>
                <div className="mb-16 flex justify-center items-center ">
                    <table className=" table-fixed w-1/2 h-2/3">
                        <tbody>
                            <tr>
                                <td className=" border border-[#1d1c34] px-4 py-2">Số tín chỉ đăng ký</td>
                                <td className=" border border-[#1d1c34] text-center py-2">{data.soTinChiDangKy || 0}</td>
                            </tr>
                            <tr  >
                                <td className="  border border-[#1d1c34] px-4 py-2">Số tín chỉ lý thuyết</td>
                                <td className="  border border-[#1d1c34] text-center py-2"> {data.soTinChiLyThuyet || 0} </td>
                            </tr>
                            <tr  >
                                <td className="  border border-[#1d1c34] px-4 py-2">Số tín chỉ thực hành</td>
                                <td className="  border border-[#1d1c34] text-center py-2"> {data.soTinChiThucHanh || 0} </td>
                            </tr>
                            <tr  >
                                <td className="  border border-[#1d1c34] px-4 py-2">Số tiền đăng ký</td>
                                <td className="  border border-[#1d1c34] text-center py-2"> {data.soTienThu || 0} VNĐ </td>
                            </tr>
                            <tr  >
                                <td className="  border border-[#1d1c34] px-4 py-2">Số tiền phải đóng</td>
                                <td className="  border border-[#1d1c34] text-center py-2"> {data.soTienPhaiDong || 0} VNĐ </td>
                            </tr>
                            <tr  >
                                <td className="  border border-[#1d1c34] px-4 py-2">Số tiền còn lại</td>
                                <td className="  border border-[#1d1c34] text-center py-2"> {data.soTienConLai || 0} VNĐ </td>
                            </tr>
                            <tr  >
                                <td className="  border border-[#1d1c34] px-4 py-2">Hạn đóng</td>
                                <td className="  border border-[#1d1c34] text-center py-2">11/05/2024</td>
                            </tr>
                            <tr>
                                <td className=" h-[50px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colSpan="2">
                                    <div className="flex justify-start items-start">
                                        <h1 className=' text-gray-800'>Số tiền đang có: <span className="font-bold">{student.soTienDangCo} VNĐ</span></h1>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" h-[50px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colSpan="2">
                                    <div className="flex justify-start items-start">
                                        <h1 className={!complete ? 'text-red-400' : 'text-green-400'}>Trạng thái: {complete ? 'Đủ điều kiện tham dự kì thi cuối kỳ' : 'Chưa đủ điều kiện tham dự kỳ thi cuối kì'}</h1>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" h-[30px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colSpan="2">
                                    <div className="flex justify-start items-start">
                                    <h1 className=' text-gray-800'>Số tiền</h1>
                                    <div className="ml-1 text-rose-500 text-[11px]">*</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className=" h-[50px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colSpan="2">
                                    <div className="flex justify-center items-center">
                                    <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="VND" className="w-full px-3 py-[12px] bg-white rounded-md border border-neutral-400  block text-[#1d1c34] text-[13px]" type="text" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td className=" border border-[#1d1c34] px-4 py-2" colSpan="2">
                                    <button onClick={handlePay} className=' w-full justify-center h-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
                                        <h3>ĐÓNG HỌC PHÍ</h3>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            theme="light"
            transition={Bounce}
            />
        </div>
    )
}
export default Tthp