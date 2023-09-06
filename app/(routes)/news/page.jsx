"use client"
import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import NewsIcon from "@/public/icons/Newspaper.svg"
import Image from "next/image"
import NewsMain from "@/app/components/news/index"
import { useState } from "react"
import {getAll} from "@/app/utils/network/news"
import Footer from "@/app/components/footer"
const News = ()=>{
    const [is_general,set_is_general] = useState(false)
    const [data,set_data] = useState(null)
    if(data == null){
        getAll(is_general).then((data_get)=>{
            console.log(data_get)
            set_data([...data_get])
        })
    }
    return (
        <>
            <Header/>
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <div className="w-full flex flex-row justify-between items-center md:pl-[100px] pl-[20px]">
                <PageTitle items={["اخبار"]} />
                <span onClick={()=>{set_is_general(!is_general);set_data(null)}} className="bg-orange text-white px-[30px] cursor-pointer py-[4px] text-[15px] rounded whitespace-nowrap flex flex-row items-center gap-x-[8px]">اخبار {is_general?"عمومی":"داخلی"} <Image className="mb-[4px]" alt="اخبار" src={NewsIcon} /></span>
            </div>
            <NewsMain data={data} />
            <Footer />
        </>
    )
}

export default News