/* eslint-disable react/prop-types */
import NavItem from './NavItem'
import { useContext, useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom"
import { userContext } from '../../context/userContext';
import { getUser, logout } from '../../api/auth';
import Loading from '../Loading';

const NavItemsContainer = ({ items }) => (

	<>
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)
const 	Nav = ({ items, loading, setLoading }) => {
	const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)
	const [isAvatarOpen, setIsAvatarOpen] = useState(false)
	const [isLogoutOpen] = useState(false)
	// const {userInfo, setUserInfo} = useContext(userContext)
	const [user, setUser] = useState({})
	const navigate = useNavigate()

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 500)
	}, [setLoading])

	useEffect(() => {
		
		const info = localStorage.getItem('info')
		if (info) {
			setUser(JSON.parse(info))
		} else navigate('/')
	}, [navigate])

	const handleLogout = async () => {
		await logout()
		localStorage.removeItem('info')
		navigate('/')
	}

	
	return (
		<nav className=' col-span-3'>
			{ loading && <Loading/>}
			<div className='flex ml-3 mt-4'>
				<RxAvatar
					className='cursor-pointer md:hidden w-7 h-7 text-[#1d1c34] ml-2 '
					onClick={() => setIsAvatarOpen(!isAvatarOpen)} />
				<IoMdMenu
					className='cursor-pointer md:hidden w-7 h-7 text-[#1d1c34]  ml-4'
					onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
				/>
				<MdOutlineLogout
					className='cursor-pointer md:hidden w-7 h-7 text-[#1d1c34] ml-4'
				//			onClick={() => }
				/>
			</div>
			<div className='grid'>
				<div
					className={`h-[100] ${isAvatarOpen ? '' : ' hidden'} md:block`}>
					<Link to={window.location.pathname === "/svdkhp" ? "/hssv" : "/svdkhp"} type="button" >
						<div className=' mt-1 ml-14 rounded-[10px] w-[250px] h-[230px] bg-[#1d1c34] flex justify-center '>
							<div className='mt-5 w-28 h-28 bg-white rounded-full flex justify-center' />
							<img className="mt-7 w-24 h-24  absolute rounded-full" src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg?t=st=1714234508~exp=1714238108~hmac=22fab367121cbcd29064e092f51516f60634310616d25c93d6847c72f14cb5c3&w=1480" />
							<h3 className='absolute mt-36  text-white z-[9999]'>{user.id}</h3>
							<h3 className='absolute mt-44 text-white z-[9999]'>22520487 {user.role}</h3>
						</div>
					</Link>
				</div>
				<div className='h-[410px]'>
				<ul className={`${isNavMenuMobileOpen ? '' : ' hidden'} md:block mt-5 `}>
					<NavItemsContainer items={items} />
				</ul>
				</div>
				<div
					className={`h-[53px] ${isLogoutOpen ? '' : ' hidden'} md:block `}>
					<button onClick={handleLogout} className='2xl:mt-5 ml-14 rounded-[10px] w-[250px] h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex justify-center items-center'>
						<h3 className='absolute z-[9999]'>ĐĂNG XUẤT</h3>
					</button>
				</div>
			</div>
		</nav>
	)
}
export default Nav
