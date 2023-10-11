"use client"
import { useState } from "react"
import {getalladmin} from "@/app/utils/network/news"
import Link from "next/link"
import { format } from 'date-fns-jalali'

const NewsMainScreen = ()=>{
    const [data,set_data] = useState(null)
    if(data == null){
        getalladmin().then((data)=>{
            set_data(data)
        })
    }
    return (
        <>
        {data == null?<></>: 
            <div className="container w-full flex gap-y-[15px] md:flex-row flex-col gap-x-[10px] lg:px-[100px] md:px-[50px] px-[10px] mx-auto">
                { data[0] == null?<div className="w-full"></div>: <div className="w-full gap-y-[10px] flex flex-col border-[1px] rounded border-[rgba(0,0,0,0.38)] p-[13px]">
                    <div className="w-full flex flex-row w-full justify-start gap-x-[10px] items-center">
                        <img className="h-[100px] border p-[3px] sm:w-[150px] w-[150px] border-[rgba(0,0,0,0.2)] object-cover" src={"https://"+data[0].images[0]}/>
                        <div className="flex flex-col items-start gap-y-[10px]">
                            <div className="flex flex-row gap-x-[20px]">
                                <span>کد : <span className="text-orange">{data[0].code}</span></span>
                                <span>تاریخ : <span className="text-orange">{format(new Date(data[0].date),"yyyy/MM/dd")}</span></span>
                            </div>
                            <span className="font-extrabold text-[17px]">لورم ایپسوم</span>
                        </div>
                    </div>
                    <p className="sm:line-clamp-3 line-clamp-2">{data[0].text1}</p>
                    <Link className="cursor-pointer text-orange h-full flex items-end" href={"/news/"+data[0].code}>نمایش خبر...</Link>
                </div>}
                <div className="flex flex-col w-full md:gap-y-[15] gap-y-[10px] justify-between  h-auto">
                    {data[1] == null?<div className="w-full"></div>:<div className="w-full rounded border-[1px] items-center pl-[15px] flex border-[rgba(0,0,0,0.38)] p-[8px] flex-row gap-x-[10px]">
                        <img className="h-[100px] border p-[3px] sm:w-[150px] w-[150px] border-[rgba(0,0,0,0.2)] object-cover" src={"https://"+data[1].images[0]}/>
                        <div className="flex flex-col items-start gap-y-[2px]">
                            <span className="font-extrabold text-[15px] sm:line-clamp-3 line-clamp-2">{data[1].title}</span>
                            <p className="text-[14px]">{data[1].text1}</p>
                            <span className="cursor-pointer text-orange text-[14px]">نمایش خبر...</span>
                        </div>
                    </div>}
                    {data[2] == null?<div className="w-full"></div>:<div className="w-full rounded border-[1px] items-center pl-[15px] flex border-[rgba(0,0,0,0.38)] p-[8px] flex-row gap-x-[10px]">
                        <img className="h-[100px] border p-[3px] sm:w-[150px] w-[150px] border-[rgba(0,0,0,0.2)] object-cover" src={"https://"+data[1].images[2]}/>
                        <div className="flex flex-col items-start gap-y-[2px]">
                            <span className="font-extrabold text-[15px]">{data[2].title}</span>
                            <p className="text-[14px]">{data[2].text1}</p>
                            <span className="cursor-pointer text-orange text-[14px]">نمایش خبر...</span>
                        </div>
                    </div>}
                </div>
            </div>}
        </>
    )
}

export default NewsMainScreen