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
                let result = await axios.get('https://web-staging.ghtklab.com/api/v1/public/address/list'  
                  
                )
                result = result.data.data
                setProvineList(result)
                result = result.map((provine) => provine.name)
                setFilterProvineList(result) 
              }
            } catch (err) {
                console.log(err)
            }
        })()
    }, [location.pathname])

    const handleGetDistrictData = async (value) => {
        const provine = provineList.find((provine) => provine.name === value) 
        let districtList = await axios.get(`https://web-staging.ghtklab.com/api/v1/public/address/list?parentId=${provine.id}&type=3`)
        districtList = districtList.data.data.map((district) => district.name)
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
      <div className=''>
        <div className='flex flex-col' >
        
          <div className='col-start2'>
            <div className={`ml-6 flex`}>
                <h3 className="text-black text-[11px]">TỈNH / THÀNH PHỐ</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className={`relative flex justify-center items-center`}>
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
        <div className='flex flex-col mb-2'>
        
          <div className='col-start2'>
            <div className={`flex ml-6`}>
                <h3 className="text-black text-[11px]">QUẬN / HUYỆN</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className={`relative flex justify-center items-center`}>
                <select onChange={handleDistrictValue} className=" w-5/6 text-[13px] mt-3 pl-2 border border-neutral-400 text-gray-700 h-[45px] rounded-md focus:outline-none focus:bg-white focus:border-neutral-400">
                  <option value='' >Chọn quận / huyện</option>
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
const   Form = ({items,items1,label, selectValue, data, setData, setList, setLoading}) => {
  const location = useLocation()

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = async (e) => {
      e.preventDefault()

      try {
        setLoading(true)
        setErrorMessage('')
        let response = []

        switch(location.pathname) {
          case  '/hssv': {
            setErrorMessage('')
            const regex = new RegExp('^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$')
            if (data.ngaysinh) {
              if (regex.test(data.ngaysinh)) {
              response = await createStudent(data)
              }
              else {
                setLoading(false)
                setErrorMessage('Ngày sinh phải ở định dạng dd/MM/yyyy')
                return
              }
            }
            break
          }
          case '/dsmh': {
            setErrorMessage('')
            response = await createSubject(data)
            if (response.status === 400) {
              setLoading(false)
              setErrorMessage('Mã môn học phải là duy nhất')
              return
            }
            break
          }
          case '/cth': {
            response = await createProgram(data)
            console.log(response)
            break
          }
          case '/mmtk': {
            response = await createSemester(data)
            break
          }
          case '/dkhp': {
            setErrorMessage('')
            const regex = new RegExp('^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$')
            if (data.ngaylap) {
              if (regex.test(data.ngaylap)){
                response = await createForm(data)
              }
              else {
                setLoading(false)
                setErrorMessage('Ngày lập phải ở định dạng dd/MM/yyyy')
                return
              }
            }
            break
          }
          case '/thp': {
            response = await createReceipt(data)
            if (response.status === 201) setList(prevState => [...prevState, response.data])
            setLoading(false)
            return
          }
        }
        

        if (response.status === 201) {
          setList(response.data)
          setLoading(false)
        }
        else {
          setLoading(false)
          setErrorMessage('Vui lòng nhập đầy đủ các trường')
        }
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

        <div className="">
          <div className=' col-span-2 flex justify-center'>
            <h1 className='text-gray-800 mt-5 mb-5 text-xl font-extrabold'>{label}</h1>
          </div>
          <div className=' col-span-2 flex justify-center flex-col'>
            <FormItemsContainer items={items} items1={items1} selectValue = {selectValue} data = {data} setData = {setData} />
          </div>
          {errorMessage && <p className="my-4 text-[12px] text-red-500 w-5/6 block mx-auto bg-red-100 py-2 rounded-md text-center">{errorMessage}</p>}
          <div className="col-span-2 mt-2 mb-6 flex justify-center">
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