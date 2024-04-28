import React, { useState } from 'react';
import { RiArrowDropUpLine, RiArrowDropDownLine } from 'react-icons/ri';

const Form = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState('');
  const [isMajorDropdownOpen, setIsMajorDropdownOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [isProvinceDropdownOpen, setIsProvinceDropdownOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);

  const handleGenderOptionClick = (option) => {
    setSelectedGender(option);
    setIsGenderDropdownOpen(false);
  };

  const handleMajorOptionClick = (option) => {
    setSelectedMajor(option);
    setIsMajorDropdownOpen(false);
  };
  const handleProvinceOptionClick = (option) => {
    setSelectedProvince(option);
    setIsProvinceDropdownOpen(false);
  };
  const handleDistrictOptionClick = (option) => {
    setSelectedDistrict(option);
    setIsDistrictDropdownOpen(false);
  };
    return (
        <div className=' ml-5 mt-5 col-span-3 w-72 h-200 relative bg-white rounded-lg border border-black'>
            <div className="grid grid-cols-2">
            <div className=' col-span-2 flex justify-center'>
            <h1 className='text-gray-800 mt-20 mb-10 text-xl font-extrabold'>HỒ SƠ SINH VIÊN</h1>
            </div>
            <div className=' ml-6 col-span-2 flex justify-start'>
                <h3 className="text-black text-[11px] ">HỌ VÀ TÊN</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className='col-span-2 flex mb-3 justify-center'>
            <div className=" h-12 w-5/6 bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex">
                 <div className=" justify-start items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex">
                    <input placeholder="Họ và tên" className="ml-3 text-[#1d1c34] text-[13px] w-full" type="text" />
                     </div>
                </div>
            </div>
            </div>
            <div className=' col-start-1 mb-3 justify-center '>
            <div className='ml-6 flex justify-start '>
                <h3 className="text-black text-[11px]">NGÀY SINH</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className='ml-3 flex justify-center '>
            <div className=" h-12 w-4/5 bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex">
                 <div className=" justify-start items-center inline-flex">
                    <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex">
                    <input placeholder="dd/mm/yy" className="ml-3 text-[#1d1c34] text-[13px] w-3/4" type="text" />
                     </div>
                </div>
            </div>
            </div>
            </div>
            <div className='col-start-2 justify-center'>
            <div className=' ml-3 flex justify-start'>
                <h3 className="text-black text-[11px]">GIỚI TÍNH</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px]">*</div>
            </div>
            <div className='mr-3 flex justify-center'>
      <div className="h-12 w-4/5  bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex relative">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex relative">
          <div className="flex justify-center items-center" onClick={() => setIsGenderDropdownOpen(!isGenderDropdownOpen)}>
                  {isGenderDropdownOpen ? <RiArrowDropUpLine className='absolute ml-44 w-7 h-7' /> : <RiArrowDropDownLine className='absolute ml-44 w-7 h-7' />}
                </div>
                {isGenderDropdownOpen && (
                  <div className="absolute w-32 bg-white border border-gray-200 rounded shadow-lg">
                    <button onClick={() => handleGenderOptionClick('Nam')} className="block  w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-t-md">Nam</button>
                    <button onClick={() => handleGenderOptionClick('Nữ')} className="block  w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-b-md">Nữ</button>
                  </div>
                )}
                <input placeholder="Giới tính" value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} className="text-[#1d1c34] text-[13px] w-3/5"></input>
              </div>

        </div>
      </div>
    </div>
            </div>
            <div className='ml-6 flex col-span-2 justify-start '>
                <h3 className="text-black text-[11px]">QUÊ QUÁN</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px] ">*</div>
            </div>
            <div className=' col-start-1 mb-3 justify-center '>
            <div className='ml-3 flex justify-center '>
      <div className="h-12 w-4/5  bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex relative">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex relative">
            <div className="flex justify-center items-center" onClick={() => setIsProvinceDropdownOpen(!isProvinceDropdownOpen)}>
                  {isProvinceDropdownOpen ? <RiArrowDropUpLine className='absolute ml-44 w-7 h-7' /> : <RiArrowDropDownLine className='absolute ml-44 w-7 h-7' />}
                </div>
                {isProvinceDropdownOpen && (
                  <div className="absolute w-32 bg-white border border-gray-200 rounded shadow-lg">
                    <button onClick={() => handleProvinceOptionClick('Quảng Nam')} className="block  w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-t-md">Quảng Nam</button>
                    <button onClick={() => handleProvinceOptionClick('Thành phố Hồ Chí Minh')} className="block  w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-b-md">Thành phố Hồ Chí Minh</button>
                  </div>
                )}
                <input placeholder="Tỉnh" value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)} className="text-[#1d1c34] text-[13px] w-3/5"></input>
              </div>
      </div>
    </div>
            </div>
            </div>
            <div className='mr-3 flex justify-center'>
      <div className="h-12 w-4/5  bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex relative">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex relative">
          <div className="flex justify-center items-center" onClick={() => setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}>
                  {isDistrictDropdownOpen ? <RiArrowDropUpLine className='absolute ml-44 w-7 h-7' /> : <RiArrowDropDownLine className='absolute ml-44 w-7 h-7' />}
                </div>
                {isDistrictDropdownOpen && (
                  <div className="absolute w-32 bg-white border border-gray-200 rounded shadow-lg">
                    <button onClick={() => handleDistrictOptionClick('Quảng Nam')} className="block  w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-t-md">Quảng Nam</button>
                    <button onClick={() => handleDistrictOptionClick('Thành phố Hồ Chí Minh')} className="block  w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-b-md">Thành phố Hồ Chí Minh</button>
                  </div>
                )}
                <input placeholder="Huyện" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className="text-[#1d1c34] text-[13px] w-3/5"></input>
              </div>
        </div>
      </div>
    </div>
            <div className=' ml-6 col-span-2 flex justify-start'>
                <h3 className="text-black text-[11px]">NGÀNH HỌC</h3>
                <div className="mt-2.5 ml-1 text-rose-500 text-[11px] font-normal font-['Inter']">*</div>
            </div>
            
            <div className='col-span-2 flex mb-5 justify-center'>
      <div className="h-12 w-5/6 bg-white rounded-md border border-neutral-400 flex-col justify-center items-start flex relative">
        <div className="justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center gap-2.5 flex relative">
          <div className="flex justify-center items-center" onClick={() => setIsMajorDropdownOpen(!isMajorDropdownOpen)}>
                {isMajorDropdownOpen ? <RiArrowDropUpLine className='absolute ml-[430px] w-7 h-7 z-99' /> : <RiArrowDropDownLine className='absolute ml-[430px] w-7 h-7 z-99' />}
              </div>
              {isMajorDropdownOpen && (
                <div className="absolute w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <button onClick={() => handleMajorOptionClick('Kỹ thuật phần mềm')} className="block px-4 py-2 w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-t-md">Kỹ thuật phần mềm</button>
                  <button onClick={() => handleMajorOptionClick('Khoa học máy tính')} className="block px-4 py-2 w-full bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent rounded-b-md">Khoa học máy tính</button>
                </div>
              )}
              <input placeholder="Ngành học" value={selectedMajor} onChange={(e) => setSelectedMajor(e.target.value)} className="text-[#1d1c34] text-[13px]"></input>
            </div>
        </div>
      </div>
    </div>
            <div className="col-span-2 mt-3 flex justify-center">
            <button className= 'rounded-[10px] justify-center w-5/6 h-[50px] bg-transparent hover:bg-[#1d1c34] hover:text-white border border-[#1d1c34] hover:border-transparent flex items-center'>
                <h3 className='absolute z-[9999]'>XÁC NHẬN</h3>
            </button>
            </div>
            
            </div>
        </div>
    )
}
export default Form
