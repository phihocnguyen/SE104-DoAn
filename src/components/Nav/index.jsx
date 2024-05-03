import NavItem from './NavItem'
import { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineLogout } from "react-icons/md";


const items = [
	{ label: 'Lập hồ sơ sinh viên'  ,active: true, link: "/hssv" },
	{ label: 'Nhập danh sách môn học', link: "/dsmh" },
	{ label: 'Nhập chương trình học',link: "/vth"  },
	{ label: 'Nhập môn học mở trong học kì',link: "/mmtk"  },
	{ label: 'Lập phiếu đăng ký học phần',link: "/dkhp" },
	{ label: 'Lập phiếu thu học phí',link: "/thp"  },
	{ label: 'Lập báo cáo sinh viên chưa đóng HP', link: "/cdhp"  },
]

const NavItemsContainer = () => (
	
	<>
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)
const Nav = ()=> {
	const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)
	const [isAvatarOpen, setIsAvatarOpen] = useState(false)
	const [isLogoutOpen] = useState(false)
	function Avatar() {
		return (
		<div className='mb-5 mt-5 ml-14 rounded-[10px] w-[250px] h-[230px] bg-[#1d1c34] flex justify-center '>
				<div className='mt-5 w-28 h-28 bg-white rounded-full flex justify-center'  />
				<img className="mt-7 w-24 h-24  absolute rounded-full" src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg?t=st=1714234508~exp=1714238108~hmac=22fab367121cbcd29064e092f51516f60634310616d25c93d6847c72f14cb5c3&w=1480"/>
				<h3 className='absolute mt-36  text-white z-[9999]'>Lê Ngọc Bảo Minh</h3>
				<h3 className='absolute mt-44 text-white z-[9999]'>22520867</h3>
		</div>
		)
	}
    return (
		//md:flex md:justify-center items-center
        <nav className='col-span-3'>
			<div className='flex ml-3 mt-4'>
        <RxAvatar 
					className='cursor-pointer md:hidden w-7 h-7 text-[#1d1c34] ml-2 '
					onClick={() => setIsAvatarOpen(!isAvatarOpen)}/>
		<IoMdMenu
					className='cursor-pointer md:hidden w-7 h-7 text-[#1d1c34]  ml-4'
					onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
				/>
		<MdOutlineLogout
					className='cursor-pointer md:hidden w-7 h-7 text-[#1d1c34] ml-4'
		//			onClick={() => }
				/>
				</div>
		<div
			className={`${isAvatarOpen ? '' : ' hidden'} md:block`}>
			<Avatar/>
		</div>
        <ul className={`${isNavMenuMobileOpen ? '' : ' hidden'} md:block mt-5 `}>
				<NavItemsContainer />
		</ul>
		<div
			className={`${isLogoutOpen ? '' : ' hidden'} md:block `}>
			<button className= '2xl:mt-5 ml-14 rounded-[10px] w-[250px] h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex justify-center items-center'>
			<h3 className='absolute z-[9999]'>ĐĂNG XUẤT</h3>
		</button>
		</div>
        </nav>
    )
}
export default Nav
