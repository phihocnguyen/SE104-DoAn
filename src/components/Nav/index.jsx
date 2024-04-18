import NavItem from './NavItem'
import { useState } from 'react'
const items = [
	{ label: 'Lập hồ sơ sinh viên', btn: 'btn.jpg' ,active: true },
	{ label: 'Nhập danh sách môn học', btn: 'btn1.jpg' },
	{ label: 'Nhập chương trình học', btn: 'btn1.jpg' },
    { label: 'Nhập môn học mở trong học kì', btn: 'btn1.jpg' },
    { label: 'Lập phiếu đăng ký học phần', btn: 'btn1.jpg' },
    { label: 'Lập phiếu thu học phí', btn: 'btn1.jpg' },
    { label: 'Lập báo cáo sinh viên chưa đóng HP', btn: 'btn1.jpg' },
]

const NavItemsContainer = () => (
	<>
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)
const Index = ()=> {
    const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)
    return (
        <nav className='col-span-3 items-center '>
        <div className='mb-5 mt-5 ml-8 rounded-[10px] w-[295px] h-[253px] bg-[#1d1c34] flex justify-center '>
        <div className='mt-5 w-32 h-32 bg-white rounded-full flex justify-center'  />
        <img className="mt-6 w-28 h-28  absolute rounded-full" src="avt.jpg"/>
        </div>
        <ul
				className={`mx-4 my-2${isNavMenuMobileOpen ? '' : ' hidden'} md:block`}
			>
				<NavItemsContainer />
			</ul>
        </nav>
    )
}
export default Index
