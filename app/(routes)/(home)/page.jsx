"use client"
import Header from "@/app/components/header/index"
import Slider from "@/app/components/slider/index"
import Notfication from "@/app/components/home/notfication/index"
import Title from "@/app/components/home/title/index"
import MainPart from "@/app/components/home/mainpart/index"
import { useId,useState } from "react" 
import Sell from "@/app/components/home/sell/index"
import Services from "@/app/components/home/services/index"
import Footer from "@/app/components/footer/index"
import {get_aboutus} from "@/app/utils/network/aboutus"


const  Home = ()=>{
    const [images,set_images] = useState([])
    console.log(images)
    if(images.length == 0)
    get_aboutus().then((data)=>{
        console.log(data.images_slider[0])

        set_images(data.images_slider)
    })
    
    return (
        <>
            <Header/>
            <div className="h-[130px] w-full"></div>
            <Slider slides={images} />
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