import Slider from "../slider/index"
import { format } from 'date-fns-jalali'
const MainNewsPage = (props)=>{
    return (
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-[20px] gap-x-[20px] lg:px-[90px] px-[40px] my-[40px]">
            <div className="col-span-2 flex lg:order-1 order-last">
                <div className="flex flex-col  md:gap-y-[30px] gap-y-[10px] w-full items-start">
                    <div className="flex flex-row gap-x-[30px] justify-between md:w-fit w-full">
                        <span>کد : <span className="text-green">{props.data.code}</span></span>
                        <span>تاریخ : <span className="text-green">{format(new Date(props.data.date),"yyyy/MM/dd")}</span></span>
                    </div>
                    
                    <span className="font-bold text-[20px]">{props.data.title}</span>
                    <p className="max-h-[100%] text-justify ">{props.data.text1}</p>
                </div>
            </div>
            <div className="col-span-2 lg:order-last order-1">
                <Slider slides={props.data.images} />
            </div>
        </div>
    )
}

export default MainNewsPage