"use client" 
import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import NewsIcon from "@/public/icons/Newspaper.svg"
import Image from "next/image"
import MainNewsPage from "@/app/components/newspage/index"
import { get_by_code } from "@/app/utils/network/news"
import { useState } from "react"

const News = ()=>{
    const [data,set_data] = useState(null)
    if(data == null){
        get_by_code(location.href.split("/")[location.href.split("/").length - 1]).then((data_get)=>{
            set_data(data_get)
        })
    }
    return (
        <>
        {data == null?<></>:
        <>
            <Header/>
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <div className="w-full flex flex-row justify-between items-center md:pl-[100px] pl-[20px]">
                <PageTitle items={["اخبار",data.title]} />
            </div>
            <MainNewsPage data={data} />
        </>}
        </>
    )
}

export default News