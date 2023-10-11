"use client"
import Link from "next/link"
import {IoLogoInstagram} from "react-icons/io"
import {IoLogoWhatsapp} from "react-icons/io5"
import { useState } from "react"
import { get_contactus } from "@/app/utils/network/contactus"

const LinkItme = (props)=>{
    return (
        <div className="flex flex-row gap-x-[10px] items-center">
            <div className="min-w-[5px] max-h-[5px] h-[5px] bg-black lg:block hidden rounded-full opacity-[0.5] mb-[-3px]"></div>
            <a href={props.href} className="text-[16px] font-Regular ">{props.text}</a>
        </div>
    )
}

const Footer = ()=>{
    const [contactus,set_contactus] = useState(null)
    if(contactus == null){
        get_contactus().then((data)=>{
            set_contactus(data)
        })
    }
    return (
        <div className="w-full flex flex-col md:px-[100px] px-[20px] gap-y-[20px] h-fit mt-[40px]">
            <div className="w-full bg-black h-[1px] rounded"></div>
            <div className="w-full flex lg:flex-row flex-col gap-y-[20px] lg:items-stretch items-center px-[10px] py-[10px] h-fit mb-[20px] ">
                <div className="w-[100%] lg:border-l-[1px]  flex flex-col lg:items-start items-center px-[20px] gap-y-[20px]">
                    <span className="font-bold">صفحات اصلی</span>
                    <div className="lg:pr-[10px] flex lg:items-start items-center flex-col gap-y-[10px]">
                        <LinkItme text={"واحد های تجاری"} href={"/shops"} />
                        <LinkItme text={"بخش فروش و اجاره"} href={"/sellandrent"} />
                        <LinkItme text={"برند ها"} href={"/shops?is_brand=true"} />
                        <LinkItme text={"اخبار"} href={"/news"} />
                        <LinkItme text={"خدمات"} href={"/services"} />
                        <LinkItme text={"همکاری با ما"} href={"/workwithus"} />
                    </div>
                </div>
                <div className="w-[100%] lg:border-l-[1px]  flex flex-col lg:items-start items-center px-[20px] gap-y-[20px]">
                    <span className="font-bold">راه های ارتباطی با ما</span>
                    {contactus == null?<></>:
                    <div className="pr-[10px] flex lg:items-start items-center flex-col gap-y-[10px]">
                    {contactus.phone_numbers.map((item,index)=>{
                        return <LinkItme text={"شماره تماس "+(index+1)+" : "+item} />
                    })}
                        
                        <LinkItme text={contactus.address} />
                        <p className="font-semibold flex items-center gap-x-[5px]">شبکه های اجتماعی : <IoLogoInstagram className="text-black text-[30px]"/> <IoLogoWhatsapp className="text-[27px] text-black"/></p>
                    </div>
                    }
                </div>
                <div className="w-[100%]   flex flex-col lg:items-start items-center px-[20px] gap-y-[20px]">
                    <span className="font-bold">خبرنامه ها</span>
                    <div className="pr-[10px] flex lg:items-start items-center flex-col gap-y-[10px]">
                        <span className="w-[90%]">با وارد کرد شماره خود از آخرین اخبار اطلاع داشته باشید</span>
                        <div className="w-[90%] flex flex-col items-center">
                        <input className="px-3 py-[8px] w-[100%] outline-none bg-[#F1F1F1] border-[#989797] rounded-[5px] transition-all text-[14px] h-fit border-[1px] focus-within:border-orange" type="text" placeholder="شماره تماس..." />
                        <button className="bg-orange px-[10px] py-[4px] text-white rounded mt-[10px]">ثبت شماره</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer