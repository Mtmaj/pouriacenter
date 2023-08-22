import { IoTv } from "react-icons/io5"
import { RiArrowDropDownLine } from "react-icons/ri"
const CategoryButton = (props)=>{
    return (
        <div className="flex flex-col w-fit gap-y-[2px] group cursor-pointer">
            <span className={(props.isSelect ==true?"text-orange":"text-[#7E7E7E]")+"  text-[16px] font-bold group-hover:text-orange transition-all duration-500"}>{props.text}</span>
            <div className="flex flex-row w-full gap-x-[2px]">
                <div className="w-[3px] h-[3px] flex -tems-center justify-center bg-[#7E7E7E] rounded-full">
                    <div className={(props.isSelect==true?"w-[3px] h-[3px]":"w-[0] h-[0]") + " w-[0] h-[0] bg-orange group-hover:h-[3px] group-hover:w-[3px] transition-all duration-500"}></div>
                </div>
                <div className="w-[80%] h-[3px] flex justify-start rounded-full bg-[#7E7E7E]">
                    <div className={(props.isSelect==true?"w-full":"w-0")+" h-[3px] bg-orange group-hover:w-full transition-all duration-500"}></div>
                </div>
            </div>
        </div>
    )
}

const Rent = ()=>{
    return (
        <div className="flex w-full flex-col gap-y-[15px]">
            <div className="w-full flex bg-[#fcfcfc] drop-shadow-xl flex-col border-[0.5px] border-green rounded-[15px] p-[17px] gap-y-[30px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">قیمت اجاره</span>
                    <div className="flex flex-row items-center gap-x-[10px]">
                        <span className="font-bold text-[16px]">رهن کامل</span>
                        <input type="checkbox" className="w-[22px] h-[22px] focus:ring-orange text-orange" />
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex bg-[#fcfcfc] drop-shadow-xl flex-col border-[0.5px] border-green rounded-[15px] p-[17px] gap-y-[30px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">قیمت رهن</span>
                </div>
                <div className="w-full flex flex-col gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex bg-[#fcfcfc] drop-shadow-xl flex-col border-[0.5px] border-green rounded-[15px] p-[17px] gap-y-[20px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">متراژ</span>
                </div>
                <div className="w-full flex flex-row gap-x-[10px] gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <input type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <input type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex bg-[#fcfcfc] drop-shadow-xl flex-col border-[0.5px] border-green rounded-[15px] p-[17px] gap-y-[10px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">مرتب سازی بر اساس قیمت</span>
                </div>
                <div className="w-full flex flex-col gap-x-[10px] gap-y-[8px]">
                    <span className="font-semibold text-[15px] text-orange cursor-pointer">کم به زیاد</span>
                    <span className="font-semibold text-[15px] text-black hover:text-orange transition-all cursor-pointer">زیاد به کم</span>
                </div>
            </div>
        </div>
    )
}

const FilterCtaegory = ()=>{
    return (
        <div className="w-[300px] flex flex-col items-start  gap-y-[30px]">
            <div className="flex flex-row gap-x-[20px] mr-[15px]">
                <CategoryButton text={"فروش"} isSelect={false} />
                <CategoryButton text={"اجاره"} isSelect={true} />
            </div>
            <Rent />
        </div>
    )
}

export const FliterCategoryResponsive = ()=>{
    return (
        <div className="relative w-full">
            <div className="w-full flex flex-row gap-x-[10px]">
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap">اجاره</span>
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap">قیمت رهن</span>
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap">متراژ</span>
                <div className="cursor-pointer border border-orange w-full rounded bg-orange flex justify-center text-white px-[10px] py-[4px] whitespace-nowrap">
                    <div className="w-full"></div>
                    <span>قیمت</span>
                    <div className="w-full flex justify-end">
                        <div className="flex flex-col text-[18px]">
                            <RiArrowDropDownLine className="rotate-180 mb-[-10px] mt-[-2px]"/>
                            <RiArrowDropDownLine />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute border rounded-[5px] mt-[10px] bg-white py-[10px] z-[5] px-[10px] w-full flex flex-col items-center">
                <span className="font-bold text-[14px]">رنج قیمت اجاره</span>
                <div className="w-full flex flex-row gap-x-[5px] gap-y-[10px] mt-[10px] text-[12px]">
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[12px] py-[5px] px-[5px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[12px] py-[5px] px-[5px]" />
                    </div>
                </div>
                <div className="grid grid-cols-2 w-full mt-[10px]">
                    <div className="flex flex-wrap gap-x-[5px] gap-y-[5px]">
                        <span className="border text-[14px] px-[10px] rounded">2000000</span>
                        <span className="border text-[14px] px-[10px] rounded">2000000</span>
                        <span className="border text-[14px] px-[10px] rounded">4000000</span>
                        <span className="border text-[14px] px-[10px] rounded">20000</span>
                        <span className="border text-[14px] px-[10px] rounded">3000000</span>
                    </div>
                    <div className="flex flex-wrap gap-x-[5px] gap-y-[5px]">
                        <span className="border text-[14px] px-[10px] rounded">2000000</span>
                        <span className="border text-[14px] px-[10px] rounded">2000000</span>
                        <span className="border text-[14px] px-[10px] rounded">4000000</span>
                        <span className="border text-[14px] px-[10px] rounded">20000</span>
                        <span className="border text-[14px] px-[10px] rounded">3000000</span>
                    </div>
                </div>
                <div className="w-full mt-[20px] grid grid-cols-2 gap-x-[5px]">
                    <span className="bg-orange w-full text-center text-white text-[13px] font-bold py-[5px] rounded">اعمال فیلتر</span>
                    <span className="w-full border text-center text-[13px] font-bold py-[5px] rounded">حذف فیلتر</span>
                </div>
            </div>
        </div>
        
    )
}

export default FilterCtaegory