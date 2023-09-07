import PageIndex from "@/app/components/pageindex/index"
import { format } from 'date-fns-jalali'
import Link from "next/link"

const NewsItem = (props)=>{
    return (
        <Link href={"/news/"+props.item.code} className="w-full flex sm:flex-row gap-y-[15px] flex-col justify-start h-fit gap-x-[10px]" >
            <img className="h-[200px] border p-[5px] sm:w-[300px] w-full border-[rgba(0,0,0,0.2)] object-cover" src={"https://"+props.item.images[0]}/>
            <div className="flex flex-col sm:gap-y-[40px] gap-[10px] sm:p-0 px-[10px] ">
                <div className="flex flex-row gap-x-[30px] sm:justify-start  justify-between">
                    <span>کد : <span className="text-orange">{props.item.code}</span></span>
                    <span>تاریخ : <span className="text-orange">{format(new Date(props.item.date),"yyyy/MM/dd")}</span></span>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <span className="font-bold text-[17px]">{props.item.title}</span>
                    <p className="max-h-[100%] sm:text-start  text-justify sm:line-clamp-3 line-clamp-2 ">{props.item.text1}</p>
                </div>
                
            </div>
        </Link>
    )
}

const NewsMain = (props)=>{
    return (
        <div className="w-full flex flex-col md:px-[100px] px-[20px] mt-[30px] gap-y-[30px]">
            {props.data==null?<></>: props.data.map((item,index)=>{
                return (
                    <>
                        <NewsItem item={item} />
                        {props.data.length - 1 == index?<></> : <div className="w-full bg-orange h-[1px] opacity-[0.2]"></div>}
                    </>
                )
            })}
            
            <PageIndex items={[1,2,3].reverse()} select={2} />
        </div>
    )
}

export default NewsMain