"use client"
import { get_contactus,add_contactus } from "@/app/utils/network/contactus";
import {useState} from "react"
const ContactUsAdmin = ()=>{
    const [phone_numbers,set_phone_numbers] = useState([])
    const [input_phonenumber,set_input_phonenumber] = useState("")
    const [address,set_address] = useState("");
    const [link_address,set_link_address] = useState("")
    const [is_get,set_is_get] = useState(false)
    if(!is_get){
        get_contactus().then((data)=>{
            set_phone_numbers([...data.phone_numbers])
            set_address(data.address)
            set_link_address(data.location_link)
            set_is_get(true)
        })
    }


    return (
        <div className="w-full flex flex-col items-start gap-y-[20px] overflow-y-scroll p-[30px]">
            <span className="text-[20px]">ثبت بخش تماس با ما</span>
            <input value={input_phonenumber} onChange={(e)=>{set_input_phonenumber(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="شماره تماس" />
            <button onClick={()=>{
                var list_change = [...phone_numbers]
                list_change.push(input_phonenumber)
                set_input_phonenumber("")
                set_phone_numbers([...list_change])
            }}  className="bg-orange text-white rounded px-[15px] py-[5px]" >افزودن شماره تماس</button>
            {phone_numbers.map((item,index)=>{
                return (<span onClick={()=>{
                    var change_list = [...phone_numbers]
                    change_list.splice(index,1)
                    set_phone_numbers([...change_list])
                }}>شماره تماس {index + 1} : {item}</span>)
            })}
            <span>جهت حذف شماره تلفن روی آن کلیک کنید</span>
            <input value={address} onChange={(e)=>{set_address(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="آدرس" />
            <input value={link_address} onChange={(e)=>{set_link_address(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="لینک آدرس در نشان" />
            <button onClick={()=>{add_contactus(phone_numbers,address,link_address)}} className="bg-orange text-white rounded px-[15px] py-[5px]" >ثبت تغییرات</button>
        </div>
    )
}

export default ContactUsAdmin