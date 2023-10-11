"use client"
import Header from "@/app/components/header/index"
import Slider from "@/app/components/slider/index"
import SliderServices from "@/app/components/home/sliderservices/index"
import Notfication from "@/app/components/home/notfication/index"
import Title from "@/app/components/home/title/index"
import MainPart from "@/app/components/home/mainpart/index"
import { useId,useState,useRef,useEffect } from "react" 
import Sell from "@/app/components/home/sell/index"
import Services from "@/app/components/home/services/index"
import Footer from "@/app/components/footer/index"
import {get_aboutus} from "@/app/utils/network/aboutus"
import {BiHome} from "react-icons/bi"
import { CiShoppingTag } from "react-icons/ci"
import BrandsSlide from "@/app/components/home/brands/index"
import NewsMainScreen from "@/app/components/home/news/index"
import LogoImg from "@/public/images/logo.png";
import Image from "next/image"
const  Home = ()=>{
    const [images,set_images] = useState([])
    const [slider_services_pos,set_slider_services_pos] = useState("right-[-100%]")
    const [slide_index,set_slide_index] = useState(0)
    useEffect(()=>{
        if(slider_services_pos == "right-[0px]"){
            document.body.style.overflowY = "hidden"
        }else{
            document.body.style.overflowY = "scroll"
        }
    })
    
    console.log(images)
    if(images.length == 0){
    get_aboutus().then((data)=>{
        console.log(data.images_slider[0])

        set_images(data.images_slider)
    })}
    
    return (
        <>
            <Header/>
            <SliderServices slide_index={slide_index} pos={slider_services_pos} set_pos={set_slider_services_pos} />
            <div className="md:h-[130px] h-[90px] w-full"></div>
            <Slider slides={images} />
            <div className="h-[50px]"></div>
            <Title icon={<BiHome className="text-[23px]" />} text={"بخش های اصلی"} idname={useId().replaceAll(":","")} />
            <MainPart />
            <div className="h-[50px]"></div>
            <Title icon={<CiShoppingTag className="text-[23px]" />} text={"برند ها"} idname={useId().replaceAll(":","")} />
            <BrandsSlide />
            <div className="h-[100px]"></div>
            <Sell />
            <div className="h-[100px]"></div>
            <Title icon={null} text={"اخبار ما"} idname={useId().replaceAll(":","")} />
            <div className="container mx-auto lg:px-[100px] md:px-[50px] px-[10px] flex justify-start mb-[10px]">
                <span className="font-bold">تازه ترین اخبار</span>                
            </div>
            <NewsMainScreen />
            <div className="h-[100px]"></div>
            <Title icon={null} text={"خدمات ما"} idname={useId().replaceAll(":","")} />
            <Services set_slide_index={set_slide_index} set_pos={set_slider_services_pos} />
            <Footer />
        </>
        
    );
}

export default Home