import { useContext, useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
// import { Link } from "react-router-dom"
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom"
import { login } from "../api/auth";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUserInfo} = useContext(userContext)
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault()
        const data = { username, password }
        console.log(data)
        const response = await login(data)
        if (response.status === 200) {
            setUserInfo(response.data)
            localStorage.setItem('info', JSON.stringify(response.data))
            navigate('/hssv')
            if (response.data.role === 1){
                navigate('/hssv')
            } else navigate('/student/svdkhp')
        } else {
            setErrorMessage('Tài khoản hoặc mật khẩu không đúng')
        }
    }
    return (
        <div className='overflow-hidden bg-custom-image h-screen w-screen absolute flex items-center justify-center'>
                <div className="bg-black w-screen h-screen fixed z-[9] opacity-40"></div>
                <div className="shadow-lg w-[30%] bg-white h-[60%] flex flex-col justify-center px-6 rounded-2xl border border-[#c9c9c9] outline-none z-10">
                    <h2 className="text-[#3c3b52] text-center font-bold text-[30px]">ĐĂNG NHẬP</h2>
                    {errorMessage && <p className="mt-4 text-[12px] text-red-500 w-[full] bg-red-100 py-2 rounded-md text-center">{errorMessage}</p>}
                    <form className="mt-16" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label className="text-[12px] font-normal text-[#666666]" htmlFor="mssv" >Tài khoản</label>
                            <input className="mt-2 focus:border-[#000000] text-[14px] p-2 rounded-md border border-[#c9c9c9] outline-none" value={username} onChange={(e) => setUsername(e.target.value)} type="text" id='mssv' name='mssv' />
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="flex justify-between">
                                <label className="text-[12px] font-normal text-[#666666]" htmlFor="password" >Mật khẩu</label>
                                <div className="flex items-center cursor-pointer opacity-50 hover:opacity-100 duration-500" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <BiSolidHide /> : <BiSolidShow />}
                                    <p className="ml-1">{showPassword ? 'Hide' : 'Show'}</p>
                                </div>
                            </div>
                            <input className="mt-2 focus:border-[#000000] text-[14px] p-2 rounded-md border border-[#c9c9c9] outline-none" value={password} onChange={e => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} id='password' name='password' />
                        </div>
                        <div className="mt-10 flex flex-col items-center ">
                        {/* <Link to="/hssv" type="button" className=" text-white bg-[#3c3b52] hover:bg-[#1D1C34] duration-150 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none  ">Đăng nhập</Link> */}
                        <button className="w-full text-white bg-[#3c3b52] hover:bg-[#1D1C34] duration-150 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Đăng nhập</button>
                    </div>
                    </form>
                    
                </div>
                <div className='z-[1] absolute bg-login-image h-[500px] w-[446px] left-[50%] top-[50%] translate-x-[30%] translate-y-[-25%]'>

                </div>
        </div>
    )
}

export default Login