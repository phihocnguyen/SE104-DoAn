/* eslint-disable react/prop-types */
import Nav from './Nav'
import List from './List'
import Form from './Form'
import { useState } from 'react'
const DefaultLayout = ({ children, value, value1, value2, value3, label,value4, selectValue, data, setData, setList }) => {
    const [loading, setLoading] = useState(true)

  
  return (
    <div className='grid grid-cols-12'>
      <Nav items={value3} loading={loading} setLoading={setLoading} />
      <main className='col-span-6'>
        {children}
        <List items={value} items1={value4} />
      </main>
          <Form items={value1} items1={value2} label={label} selectValue = {selectValue} data = {data} setData = {setData} setList = {setList} setLoading = {setLoading} />
    </div>
  )
}
export default DefaultLayout