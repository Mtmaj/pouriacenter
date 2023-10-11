"use client";

import { get_message_cv } from "@/app/utils/network/admin_massege"
import { useState } from "react"

const MessageItem = (props)=>{
    return (
        <div className="cursor-pointer items-center w-full border-[1px] rounded flex justify-between flex-row p-[20px]">
            <div className="w-full flex flex-col gap-y-[15px] items-start">
                <span>{props.item.full_name}</span>
                <span>{props.item.phone_number}</span>
                <span>{props.item.email}</span>
                <span>{props.item.gender}</span>
                <span>{props.item.madrak}</span>
                <span>{props.item.reshte}</span>
                <span>{props.item.text}</span>
                {props.item.cv_link == null?<></> : <a className="text-green" target="_blank" href={"https://"+props.item.cv_link}>مشاهده رزومه ارسالی</a>}
            </div>
        </div>
    )
}

const MessagesCvAdmin = ()=>{
    const [data,set_data] = useState(null)
    if(data == null){
        get_message_cv().then((data_get)=>{
            set_data(data_get)
        })
    }
    return (
        <div className="w-full h-full flex relative">
            <div className="flex relative flex-col overflow-y-scroll w-full p-[30px] gap-y-[20px] items-start">
                <span className="text-[18px] font-bold">رزومه های ارسالی</span>
                {data == null?<></>:
                    data.map((item,index)=>{
                        return (<MessageItem item={item} />)
                    })
                }
            </div>
        </div>
    )
}
export default MessagesCvAdmin