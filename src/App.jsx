import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Hssv from './pages/admin/hssv'
import Cth from './pages/admin/cth'
import Mmtk from './pages/admin/mmtk'
import Dkhp from './pages/admin/dkhp'
import Dsmh from './pages/admin/dsmh'
import Thp from './pages/admin/thp'
import Svcdhp from './pages/admin/svcdhp'
import Svdkhp from './pages/student/svdkhp'
import Tthp from './pages/student/tthp'
import { UserContextProvider } from './context/userContext'
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        {verifyAdmin() && <>
          <Route path='/hssv' element={<Hssv />} />
          <Route path='/cth' element={<Cth />} />
          <Route path='/mmtk' element={<Mmtk />} />
          <Route path='/dkhp' element={<Dkhp />} />
          <Route path='/thp' element={<Thp />} />
          <Route path='/dsmh' element={<Dsmh />} />
          </>
          }
        <Route path='/svcdhp' element={<Svcdhp />} />
        <Route path='/student/svdkhp' element={<Svdkhp />} />
        <Route path='/student/tthp' element={<Tthp />} />
        <Route
          element = { <div>Bạn không đủ quyền truy cập vào trang này</div> }
          path = '*' />
      </Routes>
    </UserContextProvider>
  )
}

const verifyAdmin = () => {
  const user = JSON.parse(localStorage.getItem('info'))
  if (user) {
    if (user.role === 1) return true
    else return false
  } else return true
}

export default App