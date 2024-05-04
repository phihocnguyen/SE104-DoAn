import React, { useState } from "react"
import { RiArrowDropDownLine } from 'react-icons/ri';

export interface Item {
    label: string
    position: string
    margin: string
    marrow: string
    mlabel: string
    haveDDM?: boolean
    options?: string[]
}

const DDMItemsContainer = ({ options }: { options: string[] }) => (
    <>
        {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
        ))}
    </>
)

const FormItem = ({ item }: { item: Item }) => {
    const { label, position, haveDDM , margin, marrow, mlabel, options} = item
    const [isOpen, setIsOpen] = useState(false);
    function DDMbox () {
        return (
            <div className='flex flex-col justify-between mb-2'>
            <div className={`${position}`}>
            <div className={`${mlabel} flex justify-start`}>
                <h3 className="text-black text-[11px]">{label}</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className={`relative flex ${margin} items-center`}>
                <div className=" w-5/6 bg-white border border-neutral-400 text-gray-700 h-[45px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                <select  className="text-[13px] mt-3 ml-2 w-8/12 block appearance-none" onClick={() => setIsOpen(!isOpen)}>
                {options && <DDMItemsContainer options={options} />}
                </select>
            <button className={` absolute inset-y-0 right-0 ${marrow} flex items-center px-2 text-gray-700`} >
                <RiArrowDropDownLine className='cursor-pointer  w-7 h-7' onClick={() => setIsOpen(!isOpen)}/>
                </button>
                </div>
            </div>

        </div>
      </div>
        );
    }
    function NDDMbox () {
        return (
            <div className='flex flex-col justify-between mb-2'>
                <div className={`${position}`}>
                <div className={`${mlabel} flex justify-start`}>
                    <h3 className="text-black text-[11px] ">{label}</h3>
                    <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
                    </div>
                <div className={` flex ${margin}`}>
                    <input placeholder={label} className=" px-3 py-[12px] bg-white rounded-md border border-neutral-400  block text-[#1d1c34] text-[13px] w-5/6" type="text" />
                </div>
                </div>
            </div>
        );
    }
   
    return(
        <li
        className={`cursor-pointer list-none`}>
            {haveDDM ? <DDMbox/> : <NDDMbox/>}
        </li>
    )
}
export default FormItem

