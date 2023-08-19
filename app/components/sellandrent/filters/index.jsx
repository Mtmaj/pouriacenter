import { IoTv } from "react-icons/io5"

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

const FilterCtaegory = ()=>{
    return (
        <div className="w-[330px] flex flex-col items-start mr-[120px] mt-[20px]">
            <div className="flex flex-row gap-x-[20px]">
                <CategoryButton text={"فروش"} isSelect={false} />
                <CategoryButton text={"اجاره"} isSelect={true} />
            </div>
        </div>
    )
}

export default FilterCtaegory