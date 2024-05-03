import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Hssv from './pages/hssv'
// import Cth from './pages/cth'
// import Mmtk from './pages/mmtk'
// import Dkhp from './pages/dkhp'
// import Thp from './pages/thp'
// import Svcdhp from './pages/svcdhp'
function App() {
  return (
    <Routes>
       <Route path ='/' element={ <Login/> }/> 
      <Route path ='/hssv' element={ <Hssv/> }/>
      {/* <Route path ='/cth' element={ <Cth/> }/>
      <Route path ='/mmtk' element={ <Mmtk/> }/>
      <Route path ='/dkhp' element={ <Dkhp/> }/>
      <Route path ='/thp' element={ <Thp/> }/>
      <Route path ='/svcdhp' element={ <Svcdhp/> }/> */}
    </Routes>
  )
}

export default App