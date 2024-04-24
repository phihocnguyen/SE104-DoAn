import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
const Login = () => {
    const [showPassword,setShowPassword] = useState(false)    

  return (
    <div className='bg-[#1D1C34] h-screen w-screen flex items-center justify-center'>
        <div className="w-[75%] h-[75%] bg-white rounded-md overflow-hidden flex shadow-md">
            <div className="w-[70%] h-full relative">
                <div className="w-full h-full bg-black opacity-50 z-10 absolute"></div>
                <img className="w-full h-full object-cover" src='https://img.freepik.com/free-vector/flat-background-class-2023-graduation_23-2150291538.jpg?t=st=1713941618~exp=1713945218~hmac=ed0d0fb0a0c3463efb459fe20f76298f20b938e6c4626e56fff516d51dca755b&w=996' alt ='thumbnail'/>
            </div>
            <div className="w-[30%] h-full flex flex-col justify-center px-6">
                <h2 className="text-black text-center font-bold text-[18px]">ĐĂNG NHẬP</h2>
                <form className="mt-4">
                    <div className="flex flex-col">
                        <label className="text-[12px] font-normal text-[#666666]" htmlFor="mssv" >Mã số sinh viên</label>
                        <input className="mt-2 focus:border-[#000000] text-[14px] p-2 rounded-md border border-[#c9c9c9] outline-none" type="text" id ='mssv' name ='mssv' />
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="flex justify-between">
                            <label className="text-[12px] font-normal text-[#666666]" htmlFor="password" >Mật khẩu</label>
                            <div className="flex items-center cursor-pointer opacity-50 hover:opacity-100 duration-500" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <BiSolidHide/> : <BiSolidShow/>}
                                <p className="ml-1">{showPassword ? 'Hide' : 'Show'}</p>
                            </div>
                        </div>
                        <input className="mt-2 focus:border-[#000000] text-[14px] p-2 rounded-md border border-[#c9c9c9] outline-none" type={showPassword ? 'text' : 'password'} id ='password' name ='password' />
                    </div>
                    <div className="mt-4">
                        <button type="button" className="w-full text-white bg-[#3c3b52] hover:bg-[#1D1C34] duration-150 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login