/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import FormItem from './FormItem'
import { MdExpandMore } from "react-icons/md";
import axios from 'axios';
import { createStudent } from '../../api/student';
import { useLocation } from 'react-router-dom';
import { createSubject } from '../../api/subject';
import { createProgram } from '../../api/program';
import { createSemester } from '../../api/semester';
import { createForm } from '../../api/form';
import { createReceipt } from '../../api/fee';

const FormItemsContainer = ({items,items1, selectValue, data, setData}) => {
    const [provineList, setProvineList] = useState([])
    const [filterProvineList, setFilterProvineList] = useState([])
    const [districtList, setDistrictList] = useState([])
    const location = useLocation()
    
    useEffect(() => {
        (async () => {
            try {
              if(location.pathname === '/hssv') {
                let result = await axios.get('https://thongtindoanhnghiep.co/api/city')
                result = result.data.LtsItem
                setProvineList(result)
                result = result.map((provine) => provine.Title)
                setFilterProvineList(result) 
              }
            } catch (err) {
                console.log(err)
            }
        })()
    }, [location.pathname])

    const handleGetDistrictData = async (value) => {
        console.log(value)
        const provine = provineList.find((provine) => provine.Title === value) 
        console.log(provine)
        let districtList = await axios.get(`https://thongtindoanhnghiep.co/api/city/${provine.ID}/district`)
        districtList = districtList.data.map((district) => district.Title)
        setDistrictList(districtList)
        setData(prevState => ({...prevState, huyen: value}) )
    }

    const handleDistrictValue = e => {
      setData(prevState => ({...prevState, quan: e.target.value}))
    }

    

return (
<>
  <>
		{items.map((item, index) => (
			<FormItem item={item} key={index} data ={data} setData = {setData} />
		))}
	</>
	<>
      {location.pathname === '/hssv' && 
      <div className='flex items-center'>
        <div className='flex flex-col justify-between mb-2 w-[calc(50%-8px)]' >
        
          <div className='col-start2'>
            <div className={`ml-6 flex justify-start`}>
                <h3 className="text-black text-[11px]">TỈNH / THÀNH PHỐ</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className={`relative flex justify-end items-center`}>
                <select onChange={(e) => handleGetDistrictData(e.target.value)} className=" w-5/6 text-[13px] mt-3 pl-2 border border-neutral-400 text-gray-700 h-[45px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                  <option value='' >Chọn tỉnh / thành phố</option>
                  {filterProvineList.map((provine, index) => (
                    <option key ={index} value = {provine}>{provine}</option>
                  )
                     
                  )}
                </select>
                {/* <button className={` absolute inset-y-0 right-0 mr-4 flex items-center px-2 text-gray-700`} > */}
                    {/* <RiArrowDropDownLine className='cursor-pointer  w-7 h-7' onClick={() => setIsOpen(!isOpen)}/> */}
                {/* </button> */}
            </div>

        </div>
        </div>
        <div className='flex flex-col justify-between mb-2 ml-4 w-[calc(50%-8px)]'>
        
          <div className='col-start2'>
            <div className={` flex justify-start`}>
                <h3 className="text-black text-[11px]">QUẬN / HUYỆN</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className={`relative flex justify-start items-center`}>
                <select onChange={handleDistrictValue} className=" w-5/6 text-[13px] mt-3 pl-2 border border-neutral-400 text-gray-700 h-[45px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                    {districtList.map((provine, index) => (
                    <option key ={index} value = {provine}>{provine}</option>
                  )
                     
                  )}
                </select>
                {/* <button className={` absolute inset-y-0 right-0 mr-4 flex items-center px-2 text-gray-700`} > */}
                    {/* <RiArrowDropDownLine className='cursor-pointer  w-7 h-7' onClick={() => setIsOpen(!isOpen)}/> */}
                {/* </button> */}
            </div>

        </div>
        </div>
      </div>}
      
    
		{items1.map((item, index) => (
			<FormItem item={item} key={index} selectValue ={selectValue} data ={data} setData = {setData} />
		))}
  </>
</>
)
}
const Form = ({items,items1,label, selectValue, data, setData, setList, setLoading}) => {
  const location = useLocation()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const handleSubmit = async (e) => {
      e.preventDefault()

      try {
        setLoading(true)
        
        let response = []

        switch(location.pathname) {
          case  '/hssv': {
            response = await createStudent(data)
            break
          }
          case '/dsmh': {
            response = await createSubject(data)
            break
          }
          case '/cth': {
            response = await createProgram(data)
            break
          }
          case '/mmtk': {
            response = await createSemester(data)
            break
          }
          case '/dkhp': {
            response = await createForm(data)
            console.log(data)
            break
          }
          case '/thp': {
            response = await createReceipt(data)
            break
          }
        }

        if (response.status === 201) {
          setList(prevState => [...prevState, response.data])
          setLoading(false)
        }
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className='col-span-3 mb-6'>
        <div className=' flex ml-[200px] '>
      <MdExpandMore
      className='cursor-pointer md:hidden w-10 h-10 text-[#1d1c34]'
      onClick={() => setIsFormOpen(!isFormOpen)} />
      </div>
      <div
        className={`${isFormOpen ? '' : ' hidden'} md:block`}>
          <div className=' ml-5 mt-5 w-72  relative bg-white rounded-lg border border-black'>
        <div className="grid grid-cols-2">
          <div className=' col-span-2 flex justify-center'>
            <h1 className='text-gray-800 mt-5 mb-5 text-xl font-extrabold'>{label}</h1>
          </div>
          <div className=' col-span-2 flex justify-center flex-col'>
            <FormItemsContainer items={items} items1={items1} selectValue = {selectValue} data = {data} setData = {setData} />
          </div>
          <div className="col-span-2 mt-14 mb-6 flex justify-center">
            <button onClick={handleSubmit} className='rounded-[10px] justify-center w-5/6 h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
              <h3 className='absolute z-[9999]'>XÁC NHẬN</h3>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </form>
  )
}
export default Form