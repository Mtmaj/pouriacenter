"use client"
import Header from "@/app/components/header/index"
import Slider from "@/app/components/slider/index"
import Notfication from "@/app/components/home/notfication/index"
import Title from "@/app/components/home/title/index"
import MainPart from "@/app/components/home/mainpart/index"
import { useId } from "react" 
import Sell from "@/app/components/home/sell/index"
import Services from "@/app/components/home/services/index"
import Footer from "@/app/components/footer/index"


const Home = ()=>{
    return (
        <>
            <Header/>
            <div className="h-[130px] w-full"></div>
            <Slider />
            <Notfication />
            <Title text={"بخش های اصلی"} idname={useId().replaceAll(":","")} />
            <MainPart />
            <div className="h-[20px]"></div>
            <Title text={"تازه های فروش و اجاره"} idname={useId().replaceAll(":","")} />
            <Sell />
            <div className="h-[20px]"></div>
            <Title text={"خدمات ویژه"} idname={useId().replaceAll(":","")} />
            <Services />
            <Footer />
        </>
        
    );
}

export default Home