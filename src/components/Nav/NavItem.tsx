import React, { useState } from "react"

export interface Item {
	label: string
	active?: boolean
}
const NavItem = ({ item }: { item: Item }) => {
	const { label, active } = item
	function CustomComponent() {
		return (
		  <button className="ml-3 w-80 h-14 relative">
			<div className="w-80 h-10 left-0 top-[1.5px] absolute bg-white rounded-3xl border border-gray-800" />
			<div className="w-6 h-14 left-0 top-0  absolute bg-white" />
			<h3 className='ml-10 top-0 absolute mt-1  z-[9999]'>{label}</h3>
		  </button>
		);
	  }
	  function CustomClickedComponent() {
		return (
			<button className="ml-7 w-80 h-14 relative ">
				<div className="w-80 h-10 left-0 top-[1.5px] absolute bg-white rounded-3xl border border-gray-800" />
				<div className="w-8 h-14 left-[300px] top-0 absolute bg-white"/>
				<h3 className='ml-6 top-0 absolute mt-1  z-[9999]'>{label}</h3>
			</button>
		);
	  }
	return (
		<li
			className={`flex justify-start items-center cursor-pointer${
				active ? 'active'  :''
			}`}
		>
			{active ? <CustomClickedComponent /> : <CustomComponent />}
		</li>
	)
}

export default NavItem
