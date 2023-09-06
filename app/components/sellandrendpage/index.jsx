"use client";
import Link from "next/link";
import { useEffect,useState } from "react"
import {BsCheck2Square} from "react-icons/bs"

const MainSellAndRentPage = (props)=>{
    console.log(props)
    const [slide_select,set_slide_select] = useState(0)
    return (
        <div className="w-full gap-x-[20px] md:px-[100px] px-[20px] gap-y-[20px] flex lg:flex-row flex-col mx-auto lg:items-start items-center pb-[40px]">
            <div className="min-w-[350px] md:w-[350px] w-full flex flex-col">
                <img src={"http://"+props.data.images[slide_select]} className="border p-1 rounded border-yellow h-[400px] object-cover" />
                <div className="h-[10px]"></div>
                <div className="w-full slider cursor-pointer h-[60px] overflow-x-scroll  flex mt-[5px] gap-x-[10px] no-scrollbar">
                    {props.data.images.map((item,index)=>{
                     return <div className="min-w-[60px] w-[60px] h-[60px]">
                        <img onClick={()=>{set_slide_select(index)}} src={"http://"+item} className={(index==slide_select?"border ":"") + "p-1 rounded border-yellow h-[60px] object-cover"} />
                    </div>})}
                </div>
                <div className="h-[20px]"></div>
                <div className="w-full border lg:flex hidden shadow border-[#A7A7A7] gap-y-[10px] rounded px-[20px] pb-[20px] py-[10px] flex flex-col items-start">
                    <span className="font-bold text-[18px]">تگ ها</span>
                    <div className="flex flex-wrap gap-x-[8px] gap-y-[14px] w-full">
                        {props.data.tags.map((item)=>{
                            return (<Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] shadow drop-shadow-xl" >#{item}</Link>)
                        })}
                        
                        
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-y-[20px] flex-col lg:items-start md:items-center">
                <span className="text-[20px] font-bold">{props.data.name}</span>
                {props.data.feature.map((item)=>{
                    return (
                        <div className="flex flex-row gap-x-[10px] md:text-[17px] text-[14px] items-center">
                            <BsCheck2Square className="text-green text-[25px]" />
                            <p className="font-semibold">{item} </p>
                        </div>
                    )
                })}
                {props.data.price == null?<div className="flex flex-col items-start gap-y-[10px] mt-[20px]">
                    <span className="font-bold text-[18px] flex md:justify-start gap-x-[10px] justify-between w-full">قیمت رهن : <span className="text-green">{props.data.mortgage_price} تومن</span></span>
                    <span className="font-bold text-[18px] flex md:justify-start gap-x-[10px] justify-between w-full">قیمت اجاره : <span className="text-green">{props.data.rent_price} تومن</span></span>
                </div>:<div className="flex flex-col items-start gap-y-[10px] mt-[20px]">
                    <span className="font-bold text-[18px] flex md:justify-start gap-x-[10px] justify-between w-full">قیمت فروش : <span className="text-green">{props.data.price} تومن</span></span>
                </div>}
                <span className="font-extrabold text-[15px] flex items-center gap-x-[15px] flex md:justify-start gap-x-[10px] justify-between w-full">جهت اطلاعات بیشتر تماس بگیرید : <span className="bg-orange text-white rounded text-[15px] px-[10px] py-[2px] pt-[5px]">0912xxx1234</span></span>
                <div className="w-full border lg:hidden  border-[#A7A7A7] gap-y-[10px] rounded px-[20px] pb-[20px] py-[10px] flex flex-col items-start">
                    <span className="font-bold text-[18px]">تگ ها</span>
                    <div className="flex flex-wrap gap-x-[8px] gap-y-[14px] w-full">
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSellAndRentPage