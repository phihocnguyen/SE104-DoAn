import React, { useState } from "react"
export interface Item1 {
	label: string
}
const DDMItem = ({ item }: { item: Item1 }) => {
    const { label} = item
    const [selected, setSelected] = useState('');
    const handleOptionClick = (option) => {
        setSelected(option);
      };
    return (
        <div>
        <div className="bg-white border border-gray-200 rounded shadow-lg">
            <button onClick={() => handleOptionClick({label})} className="block  w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-t-md">{label}</button>
        </div>
        {/* <input placeholder={label} value={selected} onChange={(e) => setSelected(e.target.value)} className="text-[#1d1c34] bg-black text-[13px] w-3/5"></input> */}
        </div>
    )
}
export default DDMItem