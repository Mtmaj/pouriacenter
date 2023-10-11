"use client";
import {IoLogoInstagram} from "react-icons/io"
import {IoLogoWhatsapp} from "react-icons/io5"
import {useState} from "react"
import { get_contactus } from "@/app/utils/network/contactus";
import Link from "next/link";
import {new_message} from "@/app/utils/network/admin_massege"

const MainContactUs = ()=>{
    const [full_name,set_full_name] = useState(null)
    const [phone_number,set_phone_number] = useState(null)
    const [email,set_email] = useState(null)
    const [text,set_text] = useState(null)
    const [data,set_data] = useState({})
    const [status,set_status] = useState(null)
    const [is_get,set_is_get] = useState(false)

    if(!is_get)
    get_contactus().then((data_get)=>{
        console.log(data_get)
        set_data({...data_get})
        set_is_get(true)
    })
    return (
        <div className="w-full md:px-[100px] px-[20px] flex flex-col mt-[20px]">
            {is_get == false?<></>:
            <div className="flex md:flex-row flex-col gap-y-[15px] w-full ">
                <div className="w-full flex flex-col items-start gap-y-[20px] md:gap-y-[0px] justify-between">
                    {data.phone_numbers.map((item,index)=>{
                    return (<div className="flex flex-row items-center gap-x-[10px] text-semibold">
                        <div className="h-[5px] w-[5px] bg-[rgba(0,0,0,0.5)] rounded-full"></div>
                        <span className="text-[16px] text-orange">شماره تماس {index+1} : <span className="text-black">{item}</span></span>
                    </div>)})}
                    <div className="flex flex-row items-center gap-x-[10px] text-semibold">
                        <div className="h-[5px] w-[5px] bg-[rgba(0,0,0,0.5)] rounded-full"></div>
                        <span className="text-[16px] text-orange md:w-[70%] w-full">آدرس : <span className="text-black">{data.address}</span></span>
                    </div>
                    <div className="flex flex-row items-center gap-x-[10px] text-semibold">
                        <div className="h-[5px] w-[5px] bg-[rgba(0,0,0,0.5)] rounded-full"></div>
                        <p className="font-semibold flex items-center gap-x-[5px] text-orange">شبکه های اجتماعی : <IoLogoInstagram className="text-black text-[30px]"/> <IoLogoWhatsapp className="text-[27px] text-black"/></p>
                    </div>
                </div>
                <div className="md:min-w-[300px] md:w-[300px] w-full gap-y-[10px] flex flex-col">
                    <Link href={data.location_link} className="w-full flex items-center justify-center py-[10px] rounded bg-green text-white">
                        <span className="">مسیریابی</span>
                    </Link>
                    <div className="w-full bg-[rgba(0,0,0,0.2)] h-[200px]"></div>
                </div>
            </div>
            }
            <div className="my-[20px] bg-[rgba(0,0,0,0.2)] h-[2px] rounded w-full"></div>
            <span className="text-[17px] font-bold text-green mb-[15px]">تماس با مدیرعامل</span>
            <div className="w-full grid md:grid-cols-2 gap-x-[15px] gap-y-[10px]">
                <div className="w-full flex flex-col gap-y-[15px]">
                    <div className="flex md:flex-row flex-col gap-y-[10px] md:items-center items-start gap-x-[10px]">
                        <span className="text-green whitespace-nowrap font-semibold">نام و نام خانوادگی : </span>
                        <input onChange={(e)=>{set_full_name(e.currentTarget.value)}} value={full_name} type="text" placeholder="نام و نام خانوادگی خود را وارد کنید ..." className="w-full focus-within:border-green border border-[rgba(0,0,0,0)] transition-all !outline-none bg-[rgba(0,0,0,0.1)] px-[15px] rounded py-[10px]"></input>
                    </div>
                    <div className="flex md:flex-row flex-col gap-y-[10px] md:items-center items-start gap-x-[10px]">
                        <span className="text-green whitespace-nowrap font-semibold min-w-[131px] text-start">تلفن همراه : </span>
                        <input onChange={(e)=>{set_phone_number(e.currentTarget.value)}} value={phone_number} type="text" placeholder="تلفن خود را وارد کنید ..." className="w-full !outline-none focus:border-green border border-[rgba(0,0,0,0)] transition-all bg-[rgba(0,0,0,0.1)] px-[15px] rounded py-[10px]"></input>
                    </div>
                    <div className="flex md:flex-row flex-col gap-y-[10px] md:items-center items-start gap-x-[10px]">
                        <span className="text-green whitespace-nowrap font-semibold min-w-[131px] text-start">ایمیل : </span>
                        <input onChange={(e)=>{set_email(e.currentTarget.value)}} value={email} type="text" placeholder="ایمیل خود را وارد کنید ..." className="w-full !outline-none focus:border-green border border-[rgba(0,0,0,0)] transition-all bg-[rgba(0,0,0,0.1)] px-[15px] rounded py-[10px]"></input>
                    </div>
                </div>
                <div className="w-full md:flex-row flex-col flex gap-y-[10px] md:items-start gap-x-[15px] ">
                    <span className="text-green whitespace-nowrap font-semibold">پیغام : </span>
                    <div className="w-full flex flex-col gap-y-[10px] items-center">
                        <textarea onChange={(e)=>{set_text(e.currentTarget.value)}} value={text} className="w-full h-[180px] bg-[rgba(0,0,0,0.1)] !outline-none rounded focus:border-green border border-[rgba(0,0,0,0)] px-[15px] py-[10px] transition-all" placeholder="پیغام خود را وارد نمایید"></textarea>
                        {/* <div className="flex flex-row w-full gap-x-[10px] items-center">
                            <span className="text-green whitespace-nowrap">کد امنیتی : </span>
                            <input className="w-full px-[10px] py-[5px] text-[15px] bg-[rgba(0,0,0,0.1)] rounded" placeholder="کد امنیتی در تصویر را وارد کنید ..."></input>
                            <span className="px-[10px] py-[5px] whitespace-nowrap bg-[rgba(0,0,0,0.1)] rounded">8585</span>
                        </div> */}
                        <span onClick={()=>{
                            new_message(full_name,phone_number,email,text).then((data)=>{if(data.status == 200){set_status("پیغام شما با موفقیت ارسال شد")}else{set_status("مقادیر خواسته شده را به درسی وارد نمایید*")}})
                        }} className="px-[15px] py-[5px] cursor-pointer text-white bg-green rounded w-fit text-[14px]">ارسال پیغام</span>
                    </div>
                </div>
            </div>
            {status == null?<></>: <span className="text-green my-[30px] font-bold">{status}</span>}
        </div>
    )
}

export default MainContactUs