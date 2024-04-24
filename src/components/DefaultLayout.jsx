/* eslint-disable react/prop-types */
import Nav from './Nav'
const DefaultLayout = ({children}) => {
    
  return (
    <div className='grid grid-cols-11'>
      <Nav/>
      <main className='col-span-8 bg-red-400'>
        {children}
      </main>
    </div>
  )
}
export default DefaultLayout