import React, { useState } from "react"
import { RiArrowDropDownLine } from 'react-icons/ri';
const Searchbar = () => {
    return (
        <div className="grid grid-cols-3 w-full h-[12%] mt-5 bg-gray-800 rounded-lg relative ">
            <div className="col-start-1">
                <div className=' flex justify-start'>
                    <h3 className="ml-10 text-white text-[11px]">NĂM HỌC</h3>
                    <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
                </div>
                <div className={`relative flex items-center`}>
                    <div className="inset-y-0 ml-10 w-5/6 bg-white border border-neutral-400 text-gray-700 h-[35px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                        <select className="text-[13px] mt-2 ml-2 w-[95%] block appearance-none">
                            <option>2023-2024</option>
                            <option>2022-2023</option>
                            <option>2021-2022</option>
                        </select>
                        <button className='inset-y-0 right-[0px] absolute ml-24 flex items-center px-2 text-dark' >
                            <RiArrowDropDownLine className=' pointer-events-none text-dark  w-7 h-7' />
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-start-2">
                <div className=' flex justify-start'>
                    <h3 className="ml-10 text-white text-[11px]">HỌC KỲ</h3>
                    <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
                </div>
                <div className={`relative flex items-center`}>
                    <div className="inset-y-0 ml-10 w-5/6 bg-white border border-neutral-400 text-gray-700 h-[35px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                        <select className="text-[13px] mt-2 ml-2 w-[95%] block appearance-none">
                            <option>Học kỳ 1</option>
                            <option>Học kỳ 2</option>
                            <option>Học kỳ hè</option>
                        </select>
                        <button className='inset-y-0 right-[0px] absolute ml-24 flex items-center px-2 text-dark' >
                            <RiArrowDropDownLine className='pointer-events-none text-dark  w-7 h-7'  />
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-9">
                <button className="h-[35px] col-start-3 rounded-[10px] justify-center w-5/6 bg-white hover:bg-[#1d1c34] hover:text-white border hover:border-white flex items-center"> TÌM KIẾM
                </button>
            </div>
        </div>
    )
}
export default Searchbar