import React from "react"

export interface Item {
	label: string
	btn: string
	active?: boolean
}

const NavItem = ({ item }: { item: Item }) => {
	const { label, btn, active } = item
	function CustomComponent() {
		return (
		  <div className="w-80 h-14 relative">
			<div className="w-80 h-10 left-0 top-[2px] absolute bg-white rounded-2xl border border-gray-800" />
			<div className="w-4 h-14 left-0 top-0 absolute bg-white" />
		  </div>
		);
	  }
	  function CustomClickedComponent() {
		return (
			<div className="ml-3 w-80 h-14 relative">
				<div className="w-80 h-10 left-0 top-[2px] absolute bg-white rounded-2xl border border-gray-800" />
				<div className="w-8 h-14 left-[300px] top-0 absolute bg-white" />
			</div>
		);
	  }
	return (
		<li
			className={`flex justify-start items-center cursor-pointer${
				active ?' bg-red text-green ' :''
			}`}
		>
			<CustomComponent/>
			<h3 className='ml-6 mb-5 absolute mt-2'>{label}</h3>
		</li>
	)
}

export default NavItem
