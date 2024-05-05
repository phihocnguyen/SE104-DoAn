import React from "react"

export interface Item {
	label: string
	position: string
}
const ListItem = ({ item }: { item: Item}) => {
	const { label, position } = item
	return (
		<th className={`w-1/4`} >
			<div className={`${position} mt-2 mb-2 flex justify-center items-center`}>
			<div className="text-[0.65rem] ">{label}</div>
			</div>
		</th>
	)
}
export default ListItem