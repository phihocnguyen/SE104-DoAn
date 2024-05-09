import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Hssv from './pages/hssv'
import Cth from './pages/cth'
import Mmtk from './pages/mmtk'
import Dkhp from './pages/dkhp'
import Dsmh from './pages/dsmh'
import Thp from './pages/thp'
import Svcdhp from './pages/svcdhp'
import Svdkhp from './pages/svdkhp'
import Tthp from './pages/tthp'
import { UserContextProvider } from './context/userContext'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/hssv' element={<Hssv />} />
        <Route path='/cth' element={<Cth />} />
        <Route path='/mmtk' element={<Mmtk />} />
        <Route path='/dkhp' element={<Dkhp />} />
        <Route path='/thp' element={<Thp />} />
        <Route path='/dsmh' element={<Dsmh />} />
        <Route path='/svcdhp' element={<Svcdhp />} />
        <Route path='/svdkhp' element={<Svdkhp />} />
        <Route path='/tthp' element={<Tthp />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App