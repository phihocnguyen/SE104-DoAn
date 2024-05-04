import React from "react"

export interface Item {
	label: string
	position: string
}
const ListItem = ({ item }: { item: Item }) => {
	const { label,position } = item
	return (
		<th className={`${position} mt-2 mb-2 flex justify-center items-center`}>
			<h6 className="text-white text-[0.65rem] ">{label}</h6>
		</th>
	)
}
export default ListItem