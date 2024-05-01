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
            <div className='grid grid-cols-2'>
            <div className={`${position} justify-center`}>
            <div className=' ml-3 flex justify-start'>
                <h3 className="text-black text-[11px]">{label}</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className='mr-3 flex justify-center'>
      <div className="h-12 w-4/5  bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex relative">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex relative">
          <div className="flex justify-center items-center" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {isDropdownOpen ? <RiArrowDropUpLine className='absolute ml-44 w-7 h-7' /> : <RiArrowDropDownLine className='absolute ml-44 w-7 h-7' />}
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
            <div className=' grid grid-cols-2'>
                <div className={`${position} justify-center`}>
            <div className=' ml-3 flex justify-start'>
                <h3 className="text-black text-[11px] ">{label}</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className=' flex mb-3 justify-center'>
            <div className=" h-12 w-5/6 bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex">
                 <div className=" justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex">
                    <input placeholder={label} className="ml-3 text-[#1d1c34] text-[13px] w-full" type="text" />
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
        className={`flex justify-start items-center cursor-pointer`}>
            {haveDDM ? <DDMbox/> : <NDDMbox/>}
        </li>
    )
}
export default FormItem