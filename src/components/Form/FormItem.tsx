import React, { useState } from "react"
import { RiArrowDropDownLine } from 'react-icons/ri';
import slugify from "../../utils/slugify";
import { getAllSubjectsBySemester } from "../../api/subject";

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

function DDMbox ({item, data, setData}) {
    const { label, position, haveDDM , margin, marrow, mlabel, options, state, setState, setCourseList} = item
    
    const handleState = async (e) => {
            if (location.pathname === '/mmtk' && (e.target.value === 'Học kỳ 1' || e.target.value === 'Học kỳ 2' || e.target.value === 'Học kỳ hè')) {
                let response = await getAllSubjectsBySemester(e.target.value)
                if (response?.status === 200) {
                    let data = response.data.map((course) => course.tenMonHoc)
                    data.unshift('Chọn môn học')
                    setCourseList(data)
                }            
            }
            setState(e.target.value)
            setData(prevState => ({...prevState, [slugify(label)]: e.target.value}))
        }
    return (
        <div className='flex flex-col justify-between mb-2'>
        <div className={`${position}`}>
        <div className={`${mlabel} flex justify-start`}>
            <h3 className="text-black text-[11px]">{label}</h3>
            <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
        </div>
        <div className={`relative flex ${margin} items-center`}>
            <select  onChange={handleState} className=" w-5/6 text-[13px] mt-3 pl-2 border border-neutral-400 text-gray-700 h-[45px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
            {options && <DDMItemsContainer options={options} />}
            </select>
        </div>

    </div>
    </div>
    );
}

function NDDMbox ({item, data, setData}) {
    
    const { label, position, haveDDM , margin, marrow, mlabel, options, state, setState} = item
    const handleState = (e) => {
            setState(e.target.value)
            setData(prevState => ({...prevState, [slugify(label)]: e.target.value}))

        }
    return (
        <div className='flex flex-col justify-between mb-2'>
            <div className={`${position}`}>
            <div className={`${mlabel} flex justify-start`}>
                <h3 className="text-black text-[11px] ">{label}</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
                </div>
            <div className={` flex ${margin}`}>
                <input value={state} onChange={handleState} placeholder={label} className=" px-3 py-[12px] bg-white rounded-md border border-neutral-400  block text-[#1d1c34] text-[13px] w-5/6" type="text" />
            </div>
            </div>
        </div>
    );
}

const FormItem = ({item , selectValue, data, setData}) => {
    const { label, position, haveDDM , margin, marrow, mlabel, options, state, setState} = item
    const [isOpen, setIsOpen] = useState(false);


    
    
   
    return(
        <li
        className={`cursor-pointer list-none`}>
            {haveDDM ? <DDMbox item = {item} data = {data} setData = {setData} /> : <NDDMbox item = {item} data = {data} setData = {setData} />}
        </li>
    )
}
export default FormItem

