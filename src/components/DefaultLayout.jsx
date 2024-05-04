import Nav from './Nav'
import List from './List'
import Form from './Form'
const DefaultLayout = ({children,value,value1,value2, value3, label}) => {
  return (
    <div className='grid grid-cols-12'>
      <Nav items={value3}/>
      <main className='col-span-6'>
        {children}
        <List className=" mt-10" items= {value}/>
      </main>
      <Form items={value1} items1={value2} label={label}/>
    </div>
  )
}
export default DefaultLayout