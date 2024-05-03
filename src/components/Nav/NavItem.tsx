import React, { useState } from "react"
import { Link } from "react-router-dom"
export interface Item {
	label: string
	active?: boolean
	link: string
}
const NavItem = ({ item }: { item: Item }) => {
	const { label, active, link } = item
	function CustomComponent() {
		return (
		  <Link to ={`${link}`} className="ml-7 w-72 h-14 relative" >
			<div className="w-72 h-10 left-0 top-[1.5px] absolute bg-white rounded-3xl border border-gray-800" />
			<div className="w-6 h-14 right-[269px] top-0  absolute bg-white" />
			<h3 className='ml-9 top-0 absolute mt-3 text-sm  z-[9999]'>{label}</h3>
		  </Link>
		);
	  }
	  //{`${link}`}
	  function CustomClickedComponent() {
		return (
			<button className="ml-11 w-72 h-14 relative " >
				<div className="w-72 h-10 left-0 top-[1.5px] absolute bg-white rounded-3xl border border-gray-800" />
				<div className="w-8 h-14 left-[269px] top-0 absolute bg-white"/>
				<h3 className='ml-5 top-0 absolute mt-3  z-[9999] text-sm'>{label}</h3>
			</button>
		);
	  }
	return (
		<li
			className={`flex justify-start items-center cursor-pointer`}>
			{active ? <CustomClickedComponent /> : <CustomComponent />}
		</li>
	)
}

export default NavItem
