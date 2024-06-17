import { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { Link } from "react-router-dom"
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='bg-custom-image h-screen w-screen absolute flex items-end justify-center'>
                <div className="w-[30%] bg-white h-[90%] flex flex-col justify-center px-6 rounded-2xl border border-[#c9c9c9] outline-none">
                    <h2 className="text-[#3c3b52] text-center font-bold text-[30px]">ĐĂNG NHẬP</h2>
                    <form className=" mt-16">
                        <div className="flex flex-col">
                            <label className="text-[12px] font-normal text-[#666666]" htmlFor="mssv" >Tài khoản</label>
                            <input className="mt-2 focus:border-[#000000] text-[14px] p-2 rounded-md border border-[#c9c9c9] outline-none" type="text" id='mssv' name='mssv' />
                        </div>
                        <div className="flex flex-col mt-4">
                            <div className="flex justify-between">
                                <label className="text-[12px] font-normal text-[#666666]" htmlFor="password" >Mật khẩu</label>
                                <div className="flex items-center cursor-pointer opacity-50 hover:opacity-100 duration-500" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <BiSolidHide /> : <BiSolidShow />}
                                    <p className="ml-1">{showPassword ? 'Hide' : 'Show'}</p>
                                </div>
                            </div>
                            <input className="mt-2 focus:border-[#000000] text-[14px] p-2 rounded-md border border-[#c9c9c9] outline-none" type={showPassword ? 'text' : 'password'} id='password' name='password' />
                        </div>
                        <div className="mt-10 flex flex-col items-center ">
                        <Link to="/hssv" type="button" className=" text-white bg-[#3c3b52] hover:bg-[#1D1C34] duration-150 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none  ">Đăng nhập</Link>
                    </div>
                    </form>
                    
                </div>
                <div className='absolute bg-login-image h-[500px] w-[446px] ml-[700px]'>
                </div>
        </div>
    )
}

export default Login