import React, { useState } from 'react';
import FormItem from './FormItem'
import { MdExpandMore } from "react-icons/md";
const items = [
  { label: 'HỌ VÀ TÊN', haveDDM: false, position: 'col-span-2', margin: 'justify-center', mlabel: 'ml-6' },
  { label: 'NGÀY SINH', haveDDM: false, position: 'col-start-1', margin: 'justify-end mr-2', mlabel: 'ml-6' },
]

const items1 = [
  { label: 'GIỚI TÍNH', haveDDM: true, position: 'col-start-2', margin: 'justify-start ml-2', marrow: 'mr-5', mlabel: 'ml-2', options: ['Nam', 'Nữ'] },
  { label: 'TỈNH', haveDDM: true, position: 'col-start-1', margin: 'justify-end mr-2', marrow: 'mr-0', mlabel: 'ml-6', options: ['Quảng Nam', 'TP Hồ Chí Minh'] },
  { label: 'HUYỆN', haveDDM: true, position: 'col-start-1', margin: 'justify-start ml-2', marrow: 'mr-5', mlabel: 'ml-2', options: ['Quận 1', 'Quận 2'] },
  { label: 'NGÀNH HỌC', haveDDM: true, position: 'col-span-2', margin: 'justify-center', marrow: 'mr-5', mlabel: 'ml-6', options: ['Kỹ thuật phần mềm', 'Khoa học máy tính'] },
]
const FormItemsContainer = () => (
  <>
    <div className=''>
      <FormItem item={items[0]} />
    </div>
    <div className='flex'>
      <div className='w-[50%]'>
        <FormItem item={items[1]} />
      </div>
      <div className='w-[50%]'>
        <FormItem item={items1[0]} />
      </div>
    </div>
    <div className='flex  '>
      <div className='w-[50%]'>
        <FormItem item={items1[1]} />
      </div>
      <div className='w-[50%]'>
        <FormItem item={items1[2]} />
      </div>
    </div>
    <div>
      <FormItem item={items1[3]} />
    </div>
  </>
)
const Form = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  return (
    <div className='col-span-3'>
      <div className=' flex ml-[200px] '>
    <MdExpandMore
    className='cursor-pointer md:hidden w-10 h-10 text-[#1d1c34]'
    onClick={() => setIsFormOpen(!isFormOpen)} />
    </div>
    <div
			className={`${isFormOpen ? '' : ' hidden'} md:block`}>
        <div className=' ml-5 mt-5 w-72 h-[690px] relative bg-white rounded-lg border border-black'>
      <div className="grid grid-cols-2">
        <div className=' col-span-2 flex justify-center'>
          <h1 className='text-gray-800 mt-20 mb-10 text-xl font-extrabold'>HỒ SƠ SINH VIÊN</h1>
        </div>
        <div className=' col-span-2 flex justify-center flex-col'>
          <FormItemsContainer />
        </div>
        <div className="col-span-2 mt-10 flex justify-center">
          <button className='rounded-[10px] justify-center w-5/6 h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
            <h3 className='absolute z-[9999]'>XÁC NHẬN</h3>
          </button>
        </div>
      </div>
    </div>
		</div>
  </div>
  )
}
export default Form