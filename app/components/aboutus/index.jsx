"use client"
import AboutUs from "@/app/(routes)/aboutus/page";
import { useState } from "react";
import { get_aboutus } from "../../utils/network/aboutus"
const MainAboutUs = ()=>{
    const [is_get,set_is_get] = useState(false)
    const [data,set_data] = useState({})
    if(!is_get){
        get_aboutus().then((data_get)=>{
            set_data(data_get)
            set_is_get(true)
        })
    }
    return (
        <>
        {is_get ==false?<></>:
        <div className="container mt-[20px] mx-auto flex flex-col lg:px-[100px] md:px-[40px] gap-y-[20px] px-[10px]">
            <div className="grid md:grid-cols-2 gap-y-[10px] w-full gap-x-[30px] px-[50px] ">
                <div className="w-full flex itmes-end">
                    <img src={"http://"+data.images_slider[0]} />
                </div>
                <div className="w-full flex items-center justify-start h-full ">
                    <div className="lg:w-[70%] md:w-[90%] w-full flex flex-col items-start md:gap-y-[10px] gap-y-[5px]">
                        <span className="font-bold text-orange">{data.title1}</span>
                        <p className="text-justify">
                        {data.text1}
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="grid md:grid-cols-2 gap-y-[10px] w-full gap-x-[30px] px-[50px] ">
                <div className="w-full flex itmes-start md:order-last order-1">
                    <img src={"http://"+data.images_slider[1]} />
                </div>
                <div className="w-full flex items-center justify-end h-full md:order-1 order-last">
                    <div className="lg:w-[70%] md:w-[90%] w-full flex flex-col items-start md:gap-y-[10px] gap-y-[5px]">
                        <span className="font-bold text-orange">{data.title2}</span>
                        <p className="text-justify">
                            {data.text2}
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="container mt-[100px] font-bold px-[50px] gap-y-[10px] flex flex-col items-start">
                <span className="text-orange">{data.title3}</span>
                {data.texts.map((item)=>{
                return (<div className="flex flex-row items-center gap-x-[10px]">
                    <div className="h-[5px] w-[5px] bg-[rgba(0,0,0,0.5)] rounded-full"></div>
                    <span className="text-[15px]">{item}</span>
                </div>)})}
                
            </div>
        </div>}
        </>
    )
}

export default MainAboutUs