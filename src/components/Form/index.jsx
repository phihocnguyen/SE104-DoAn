import React, { useState } from 'react';
import FormItem from './FormItem'
const items = [
  { label: 'HỌ VÀ TÊN'  , haveDDM: false, position: 'col-span-2'},
  { label: 'NGÀY SINH'  , haveDDM: false, position: 'col-start-1'},
]

const items1 = [
  { label: 'GIỚI TÍNH'  , haveDDM: true, position: 'col-start-2'},
  { label: 'TỈNH'  , haveDDM: true,position: 'col-start-1'},
  { label: 'HUYỆN'  , haveDDM: true,position: 'col-start-1'},
  { label: 'NGÀNH HỌC'  , haveDDM: true,position: 'col-span-2'},
]

const FormItemsContainer = () => (
	<>
    <div className=''>
      <FormItem item = {items[0]} />
    </div>
    <div className='flex'>
      <div className='w-[50%]'>
        <FormItem item = {items[1]} />
      </div>
      <div className='w-[50%]'>
        <FormItem item = {items1[0]} />
      </div>
    </div>
    <div className='flex  '>
      <div className='w-[50%]'>
        <FormItem item = {items1[1]} />
      </div>
      <div className='w-[50%]'>
        <FormItem item = {items1[2]} />
      </div>
    </div>
    <div>
        <FormItem item = {items1[3]} />

    </div>
	</>
)
const Form = () => {
    return (
        <div className=' ml-5 mt-5 col-span-3 w-72 h-200 relative bg-white rounded-lg border border-black'>
            <div className="grid grid-cols-2">
            <div className=' col-span-2 flex justify-center'>
            <h1 className='text-gray-800 mt-20 mb-10 text-xl font-extrabold'>HỒ SƠ SINH VIÊN</h1>
            </div>
            <ul className=' col-span-2 flex justify-center flex-col'>
              <FormItemsContainer/>
              </ul>
            <div className="col-span-2 mt-3 flex justify-center">
            <button className= 'rounded-[10px] justify-center w-5/6 h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
                <h3 className='absolute z-[9999]'>XÁC NHẬN</h3>
            </button>
            </div>
            </div>
        </div>
    )
}
export default Form