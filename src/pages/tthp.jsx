import React from "react"
import Nav from "../components/Nav"
import List from "../components/List"
const Tthp = () => {
    const item = [
        { label: 'Đăng ký học phần', link: "/svdkhp" },
        { label: 'Thông tin học phí', active: true, link: "/tthp" },
    ]
    return (
        <div className='grid grid-cols-12'>
            <Nav items={item} />
            <main className='col-span-8 grid'>
                <div className="mt-10 flex justify-center ">
                    <h3 className=" font-extrabold">THÔNG TIN HỌC PHÍ</h3>
                </div>
                <div className="mb-16 flex justify-center items-center ">
                    <table className=" table-fixed w-1/2 h-2/3">
                        <tbody>
                            <tr>
                                <td class=" border border-[#1d1c34] px-4 py-2">Số tín chỉ đăng ký</td>
                                <td class=" border border-[#1d1c34] px-28 py-2">22</td>
                            </tr>
                            <tr  >
                                <td class="  border border-[#1d1c34] px-4 py-2">Số tín chỉ lý thuyết</td>
                                <td class="  border border-[#1d1c34] px-28 py-2">22</td>
                            </tr>
                            <tr  >
                                <td class="  border border-[#1d1c34] px-4 py-2">Số tín chỉ thực hành</td>
                                <td class="  border border-[#1d1c34] px-28 py-2">22</td>
                            </tr>
                            <tr  >
                                <td class="  border border-[#1d1c34] px-4 py-2">Số tiền đăng ký</td>
                                <td class="  border border-[#1d1c34] px-28 py-2">22</td>
                            </tr>
                            <tr  >
                                <td class="  border border-[#1d1c34] px-4 py-2">Số tiền phải đóng</td>
                                <td class="  border border-[#1d1c34] px-28 py-2">22</td>
                            </tr>
                            <tr  >
                                <td class="  border border-[#1d1c34] px-4 py-2">Số tiền đã đóng</td>
                                <td class="  border border-[#1d1c34] px-28 py-2">22</td>
                            </tr>
                            <tr  >
                                <td class="  border border-[#1d1c34] px-4 py-2">Hạn đóng</td>
                                <td class="  border border-[#1d1c34] px-28 py-2">22</td>
                            </tr>
                            <tr>
                                <td class=" h-[50px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colspan="2">
                                    <div className="flex justify-start items-start">
                                        <h1 className=' text-gray-800'>Số tiền đang có:</h1>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class=" h-[50px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colspan="2">
                                    <div className="flex justify-start items-start">
                                        <h1 className=' text-red-600'>Trạng thái: Chưa đủ điều kiện tham dự kỳ thi cuối kì</h1>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class=" h-[30px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colspan="2">
                                    <div className="flex justify-start items-start">
                                    <h1 className=' text-gray-800'>Số tiền</h1>
                                    <div className="ml-1 text-rose-500 text-[11px]">*</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class=" h-[50px] border border-x-[#1d1c34] border-y-transparent px-4 py-2" colspan="2">
                                    <div className="flex justify-center items-center">
                                    <input placeholder="VND" className="w-full px-3 py-[12px] bg-white rounded-md border border-neutral-400  block text-[#1d1c34] text-[13px]" type="text" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <td class=" border border-[#1d1c34] px-4 py-2" colspan="2">
                            <button className=' w-full justify-center h-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
                                <h3>ĐÓNG HỌC PHÍ</h3>
                            </button>
                        </td>
                    </table>
                </div>

            </main>
        </div>
    )
}
export default Tthp