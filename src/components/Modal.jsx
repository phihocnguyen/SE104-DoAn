/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Modal = ({data, setOpenModal}) => {
  console.log(data)
  const items = [
    { label: 'STT' },
    { label: 'MÔN HỌC' },
    { label: 'SỐ TÍN CHỈ' },
  ]
  return (
    <div className="px-8 w-[60%] h-[80%] shadow-md fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md z-[9999999] ">
        <div onClick={() => setOpenModal(prevState => !prevState)}  className="mt-4 mb-4 ml-[auto] w-[40px] rounded-md text-red-500 hover:text-white duration-150 cursor-pointer hover:bg-red-400 flex justify-center "><FaTimes className="text-[24px]"/></div>
        <table className="rounded-lg table-fixed max-h-[75%] w-full  bg-white border border-gray-800  ">
                <thead className="h-[20%] bg-gray-800 rounded-t-lg h-18">
                    <tr className='w-full px-4 py-3 flex justify-start items-center '>
                        {items.map((item, index) => (
                          <th key = {index} className={`w-1/3`} >
                            <div className={`text-white mt-2 mb-2 flex justify-center items-center`}>
                              <div className="text-[0.65rem] ">{item.label}</div>
                            </div>
                          </th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {data.map((item, index) => (
                        <tr key = {index} className="px-4 py-3 flex items-center">
                            <th className={`w-1/3`} >
                                <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                    <div className="text-[0.65rem] ">{index+1}</div>
                                </div>
                            </th>
                            <th className={`w-1/3`} >
                                <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                    <div className="text-[0.65rem] ">{item.tenMonHoc}</div>
                                </div>
                            </th>
                            <th className={`w-1/3`} >
                                <div className={`text-black mt-2 mb-2 flex justify-center items-center`}>
                                    <div className="text-[0.65rem] ">{item.tinChi}</div>
                                </div>
                            </th>
                        </tr>
                    ))}
                </tbody>
          </table>
    </div>
  )
}

export default Modal