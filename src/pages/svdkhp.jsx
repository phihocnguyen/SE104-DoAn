import React from "react"
import Nav from "../components/Nav"
import List from "../components/List"
const Svdkhp = () => {
  const item = [
    { label: 'Đăng ký học phần', active: true, link: "/svdkhp" },
    { label: 'Thông tin học phí', link: "/tthp" },
  ]
  const defaultsc = " text-white"
  const defaultsc1 = " text-black"
  const items = [
    { label: 'STT', position: defaultsc },
    { label: 'MÔN HỌC', position: defaultsc },
    { label: 'LOẠI MÔN', position: defaultsc },
    { label: 'TÍN CHỈ', position: defaultsc },
  ]
  const items1 = [
    { label: '1', position: defaultsc1 },
    { label: 'Nhập môn công nghệ phần mềm', position: defaultsc1 },
    { label: 'Cơ sở ngành', position: defaultsc1 },
    { label: '4', position: defaultsc1 },

  ]
  return (
    <div className='grid grid-cols-12'>
      <Nav items={item} />
      <main className='grid col-span-8'>
        <div className="mb-5 h-[370px]">
          <div className="flex">
          <h3 className='mt-3 w-2/6 text-gray-800'>DANH SÁCH MÔN HỌC</h3>
          <button className='mt-3 rounded-[10px] ml-[39rem] justify-center w-1/6 h-[40px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
            <h3 className='absolute text-[12px]'>XÁC NHẬN</h3>
          </button>
          </div>
          <List items={items} items1={items1} />
        </div>
        <div className="h-[230px]">
          <h3 className=' text-gray-800'>DANH SÁCH MÔN ĐÃ CHỌN</h3>
          <List items={items} items1={items1} />
        </div>
      </main>
    </div>
  )
}
export default Svdkhp