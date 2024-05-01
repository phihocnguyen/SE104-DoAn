import React, { useState } from "react"
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';
import DDMItem from './DDMItem'
export interface Item {
	label: string
    position: string
	haveDDM?: boolean
}
const items = [
    { label: 'Nam'},
    { label: 'Nữ'},
]
const DDMItemsContainer = () => (
	<>
		{items.map((item, index) => (
			<DDMItem item={item} key={index} />
		))}
	</>
)
const FormItem = ({ item }: { item: Item }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    function DDMbox () {
        return (
            <div className=''>
            <div className={`${position} justify-center`}>
            <div className=' ml-3 flex justify-start'>
                <h3 className="text-black text-[11px]">{label}</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className=''>
      <div className="h-12 mx-[12px] bg-white rounded-md border border-neutral-400  justify-end items-center flex">
        <div className="">
            <div className="">
                <div className="flex justify-center items-center" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {isDropdownOpen ? <RiArrowDropUpLine className='w-7 h-7' /> : <RiArrowDropDownLine className='w-7 h-7' />}
                </div>
                    {isDropdownOpen && (
                    <DDMItemsContainer/>
                    )}
            </div>
        </div>
      </div>
            </div>
            </div>
            </div>
        );
    }
    function NDDMbox () {
        return (
            <div className=''>
                <div className={`${position} justify-center`}>
            <div className=' ml-3 flex justify-start'>
                <h3 className="text-black text-[11px] ">{label}</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className='mb-3 px-[12px]'>
            <div className="">
                 <div className="">
                    <div className="">
                        <input placeholder={label} className="px-3 bg-white rounded-md border border-neutral-400 py-[12px] block text-[#1d1c34] text-[13px] w-full" type="text" />
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
	const { label,position, haveDDM } = item
    return(
        <li
        className={`cursor-pointer`}>
            {haveDDM ? <DDMbox/> : <NDDMbox/>}
        </li>
    )
}
export default FormItem