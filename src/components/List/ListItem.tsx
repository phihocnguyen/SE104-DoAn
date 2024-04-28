import React from "react"

export interface Item {
	label: string
}
const ListItem = ({ item }: { item: Item }) => {
	const { label } = item
	return (
		<li className='mt-6 flex justify-start items-center px-4  '>
			<h6 className="text-white text-[0.65rem] ">{label}</h6>
		</li>
	)
}
export default ListItem