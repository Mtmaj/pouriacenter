"use client"

import {useState} from "react"
import {upload_image} from "@/app/utils/network/upload" 
import {new_message_cv} from "@/app/utils/network/admin_massege"
import { AiOutlineUser,AiOutlineLink } from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {PiGenderIntersex} from "react-icons/pi"
import {IoNewspaperOutline} from "react-icons/io5"
import {BiBookAlt} from "react-icons/bi"
import {GoNote} from "react-icons/go"


const MainWorkWithUs = ()=>{
    const [full_name,set_full_name] = useState(null)
    const [phone_number,set_phone_number] = useState(null)
    const [email,set_email] = useState(null)
    const [text,set_text] = useState(null)
    const [gender,set_gender] = useState("آقا")
    const [madrak,set_madrak] = useState(null)
    const [reshte,set_reshte] = useState(null)
    const [data,set_data] = useState({})
    const [status,set_status] = useState(null)
    const [is_get,set_is_get] = useState(false)
    const [cv_link,set_cv_link] = useState(null)
    function handleChange(event){
        upload_image(event.target.files[0]).then((data)=>{
            set_cv_link(data.img_url)
        })
    }
    return (
        <div className="container lg:px-[80px] md:px-[25px] px-[15px]  flex mx-auto flex-col items-start gap-y-[40px] pb-[50px] pt-[40px]">
            <span className="text-[15px] text-black font-bold">جهت درخواست همکاری با ما فرم مربوطه را پر کنید</span>
            <div className="flex flex-col md:px-[40px] px-[10px] items-center w-full gap-y-[30px]">
                <div className="flex md:flex-row flex-col gap-y-[20px] gap-x-[10px] w-full">
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[5px] mr-[5px]">
                            <AiOutlineUser className="text-[20px]" />
                            <span className="font-bold">نام و نام خانوادگی <span className="text-[#FF0000]">*</span></span>
                        </div>
                        <div className="w-full rounded bg-[rgba(0,0,0,0.08)] border-[rgba(0,0,0,0)] border-[1px] px-[10px] py-[5px] group focus-within:border-green transition-all duration-500 border-[1px]">
                            <input onChange={(e)=>{set_full_name(e.currentTarget.value)}} value={full_name} className="bg-[rgba(0,0,0,0)] text-[15px] outline-0 w-full" placeholder="نام و نام خانوادگی خود را وارد نمایید..." />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[8px] mr-[5px]">
                            <BsTelephone className="text-[15px]" />
                            <span className="font-bold">تلفن همراه <span className="text-[#FF0000]">*</span></span>
                        </div>
                        <div className="w-full rounded bg-[rgba(0,0,0,0.08)] border-[rgba(0,0,0,0)] border-[1px] px-[10px] py-[5px] group focus-within:border-green transition-all duration-500 border-[1px]">
                            <input onChange={(e)=>{set_phone_number(e.currentTarget.value)}} value={phone_number} className="bg-[rgba(0,0,0,0)] text-[15px] outline-0 w-full" placeholder="شماره تماس خود را وارد نمایید..." />
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-y-[20px] gap-x-[10px] w-full">
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[5px] mr-[5px]">
                            <HiOutlineMail className="text-[20px]" />
                            <span className="font-bold">ایمیل <span className="text-[#FF0000]">*</span></span>
                        </div>
                        <div className="w-full rounded bg-[rgba(0,0,0,0.08)] border-[rgba(0,0,0,0)] border-[1px] px-[10px] py-[5px] group focus-within:border-green transition-all duration-500 border-[1px]">
                            <input onChange={(e)=>{set_email(e.currentTarget.value)}} value={email} className="bg-[rgba(0,0,0,0)] text-[15px] outline-0 w-full" placeholder="ایمیل خود را وارد نمایید..." />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[5px] mr-[5px]">
                            <PiGenderIntersex className="text-[22px] font-bold" />
                            <span className="font-bold">جنسیت <span className="text-[#FF0000]">*</span></span>
                        </div>
                        <div className="flex flex-row gap-x-[50px] w-full items-start mt-[10px]">
                            <div className="flex flex-row items-center gap-x-[5px] mr-[10px]">
                                <input  radioGroup="gender" onClick={()=>{set_gender("آقا")}} checked={gender=="آقا"} name="gender" className="w-[15px] h-[15px] ring-orange border-orange" type="radio" id="man" />
                                <span>آقا</span>
                            </div>
                            <div className="flex flex-row items-center gap-x-[5px] mr-[10px]">
                                <input radioGroup="gender" onClick={()=>{set_gender("خانم")}} checked={gender=="خانم"} name="gender" className="w-[15px] h-[15px] ring-orange border-orange" type="radio" id="man" />
                                <span>خانم</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col gap-y-[20px] gap-x-[10px] w-full">
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[5px] mr-[5px]">
                            <IoNewspaperOutline className="text-[17px]" />
                            <span className="font-bold">مدرکت تحصیلی<span className="text-[#FF0000]"></span></span>
                        </div>
                        <div className="w-full rounded bg-[rgba(0,0,0,0.08)] border-[rgba(0,0,0,0)] border-[1px] px-[10px] py-[5px] group focus-within:border-green transition-all duration-500 border-[1px]">
                            <input onChange={(e)=>{set_madrak(e.currentTarget.value)}} value={madrak} className="bg-[rgba(0,0,0,0)] text-[15px] outline-0 w-full" placeholder="مدرکت تحصیلی..." />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[8px] mr-[5px]">
                            <BiBookAlt className="text-[18px]" />
                            <span className="font-bold">رشته تحصیلی <span className="text-[#FF0000]"></span></span>
                        </div>
                        <div className="w-full rounded bg-[rgba(0,0,0,0.08)] border-[rgba(0,0,0,0)] border-[1px] px-[10px] py-[5px] group focus-within:border-green transition-all duration-500 border-[1px]">
                            <input onChange={(e)=>{set_reshte(e.currentTarget.value)}} value={reshte} className="bg-[rgba(0,0,0,0)] text-[15px] outline-0 w-full" placeholder="رشته تحصیلی خود را وارد نمایید..." />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-[10px] w-full">
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[5px] mr-[5px]">
                            <GoNote className="text-[17px]" />
                            <span className="font-bold">نوشتن توضیحات <span className="text-[#FF0000]">*</span></span>
                        </div>
                        <textarea onChange={(e)=>{set_text(e.currentTarget.value)}} value={text} className="w-full h-[180px] bg-[rgba(0,0,0,0.1)] !outline-none rounded focus:border-green border border-[rgba(0,0,0,0)] px-[15px] py-[10px] transition-all" placeholder="پیغام خود را وارد نمایید"></textarea>
                    </div>
                </div>
                <div className="flex flex-row gap-x-[10px] lg:w-[40%] md:w-[60%] w-full ml-auto">
                    <div className="w-full flex flex-col gap-y-[10px]">
                        <div className="flex flex-row items-center gap-x-[5px] mr-[5px]">
                            <AiOutlineLink className="text-[17px]" />
                            <span className="font-bold">انتخاب ضمیمه<span className="text-[#FF0000]"></span></span>
                        </div>
                        <div className="w-full rounded bg-[rgba(0,0,0,0.08)] flex flex-row">
                            <div className="w-full flex flex-row overflow-hidden justify-start items-center px-[10px] py-[5px]">
                                <span className="whitespace-nowrap">{cv_link == null? "فایلی انتخاب نشده است" : cv_link}</span>
                            </div>
                            <div className="h-full bg-orange relative text-white flex items-center cursor-pointer justify-center rounded">
                                <span className="whitespace-nowrap px-[15px]">افزودن فایل</span>
                                <input onChange={handleChange} type="file" className="w-[100px] h-full custom-file-input absolute" />
                            </div>
                        </div>
                        {cv_link == null?<></>: <a className="opacity-[0.9] text-orange whitespace-nowrap" href={"https://"+cv_link} target="_blank">مشاهده فایل انتخاب شده</a>}
                        {status == null?<></>: <span className="text-green font-bold mt-[10px]">{status}</span>}
                    </div>
                    
                </div>
                <span
                onClick={()=>{
                    new_message_cv(full_name,phone_number,email,text,cv_link,gender,reshte,madrak).then((data)=>{if(data.status == 200){set_status("درخواست شما با موفقیت ارسال شد")}else{set_status("مقادیر خواسته شده را به درستی وارد نمایید*")}})
                }} 
                className="px-[20px] cursor-pointer py-[10px] rounded-full mt-[30px] bg-orange text-white">ارسال درخواست همکاری</span>
            </div>
            
        </div>
    )
}

export default MainWorkWithUs