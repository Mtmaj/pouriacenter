"use client"
import Header from "@/app/components/header/index"
import Footer from "@/app/components/footer/index"
import MainSellAndRentPage from "@/app/components/sellandrendpage/index"
import Title from "@/app/components/home/title/index"
import { useId } from "react"
import Sell from "@/app/components/home/sell/index"
import PageTitle from "@/app/components/titlepage/index"
const SellRentPage = ()=>{
    return (
        <>
            <Header/>
            <div className="h-[130px] w-full"></div>
            <PageTitle items={["واحد فروش و اجاره","لورم ایپسوم"]} />
            <div className="h-[30px]"></div>
            <MainSellAndRentPage />      
            <Title text={"آگهی های مشابه"} idname={useId().replaceAll(":","")} />
            <Sell />

        </>
        
    );
}

export default SellRentPage