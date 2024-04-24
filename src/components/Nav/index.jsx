import NavItem from './NavItem'
// import { useState } from 'react'
const items = [
	{ label: 'Lập hồ sơ sinh viên'  ,active: true },
	{ label: 'Nhập danh sách môn học'  },
	{ label: 'Nhập chương trình học'  },
	{ label: 'Nhập môn học mở trong học kì'  },
	{ label: 'Lập phiếu đăng ký học phần'  },
	{ label: 'Lập phiếu thu học phí'  },
	{ label: 'Lập báo cáo sinh viên chưa đóng HP'  },
]

const NavItemsContainer = () => (
	
	<>
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)
const Index = ()=> {
    return (
        <nav className='col-span-3 items-center'>
        <div className='mb-5 mt-5 ml-14 rounded-[10px] w-[250px] h-[230px] bg-[#1d1c34] flex justify-center '>
        <div className='mt-5 w-28 h-28 bg-white rounded-full flex justify-center'  />
        <img className="mt-6 w-24 h-24  absolute rounded-full" src="avt.jpg"/>
		<h3 className='absolute mt-36  text-white z-[9999]'>Lê Ngọc Bảo Minh</h3>
		<h3 className='absolute mt-44 text-white z-[9999]'>22520867</h3>
		</div>
        <ul>
				<NavItemsContainer />
		</ul>
		<button className= 'ml-14 rounded-[10px] w-[250px] h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex justify-center items-center'>
		<h3 className='absolute z-[9999]'>ĐĂNG XUẤT</h3>
		
		</button>
        </nav>
    )
}
export default Index
