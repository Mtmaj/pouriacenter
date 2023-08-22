import { RiArrowDropDownLine } from "react-icons/ri"

const PageIndex = (props)=>{
    return (
        <div className="w-full my-[60px] flex justify-center">
            <div className="flex rounded shadow-xl flex-row bg-[#D9D9D9] w-fit">
                <div className="bg-white p-[-30px] rounded">
                    <RiArrowDropDownLine className="rotate-[-90deg]" size={30} />    
                </div>
                <div className="w-full px-[10px] flex flex-row gap-x-[5px]">
                    {props.items.map((item,index)=>{
                        return (
                            <div className={(props.select == index? "bg-[rgba(255,126,3,0.8);] text-white ":"text-black")+ " text-[16px] flex items-center cursor-pointer h-full px-[12px] rounded"}>
                                <span>{item}</span>
                            </div>
                        )
                    })}
                    
                </div>
                <div className="bg-white p-[-30px] rounded">
                    <RiArrowDropDownLine className="rotate-[90deg]" size={30} />    
                </div>
            </div>
        </div>
    )
}

export default PageIndex