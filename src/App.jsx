import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Hssv from './pages/hssv'
function App() {
  return (
    <Routes>
      <Route path ='/' element={ <Login/> }/> 
      <Route path ='/hssv' element={ <Hssv/> }/>
    </Routes>
  )
  
}

export default App