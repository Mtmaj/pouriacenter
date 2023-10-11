"use client"
import Image from "next/image"
import TaioringImg from "@/public/images/tailoring.svg"
import SmookingImg from "@/public/images/smooking.svg"
import ParerImg from "@/public/images/prayer.svg"
import ParkingImg from "@/public/images/parking.svg"
import ArrowRight from "@/public/icons/ArrowRightWhite.svg"
import ArrowLeft from "@/public/icons/ArrowleftWhite.svg"
import {IoLogoInstagram} from "react-icons/io"
import {IoLogoWhatsapp} from "react-icons/io5"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import {useRef,useState,useEffect} from "react"
import { Autoplay } from 'swiper/modules';


const MainServices = ()=>{
    const swiperRef = useRef()
    const [index_page,SetPageIndex] = useState(0)
    return (
        <>
            <div className="container mt-[30px] md:px-[90px] px-[30px] mx-auto flex lg:flex-row flex-col-reverse gap-y-[20px] justify-between items-center">
                <Swiper initialSlide={1} className="md:w-[400px] w-full !mx-[0px]" onSlideChange={(index)=>{SetPageIndex(index.realIndex)}} slidesPerView={1} onSwiper={(swiper)=>{swiperRef.current = swiper}}>
                    <SwiperSlide className="md:w-[400px] w-full mx-[0px]">
                        <div className="md:w-[400px] w-full flex flex-col items-start gap-y-[15px]">
                            <div className="flex flex-row gap-x-[15px] items-center ">
                                <span className="font-bold text-[20px]">اتاق سیگار</span>
                                <div className="flex flex-row gap-x-[6px]">
                                    <div onClick={()=>{swiperRef.current.slidePrev()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowRight} className="w-[18px] h-[18px] object-contain" />
                                    </div>
                                    <div onClick={()=>{swiperRef.current.slideNext()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowLeft} className="w-[18px] h-[18px] mr-[2px] object-contain" />
                                    </div>
                                </div>
                            </div>
                            <p>اتاق سیگار و سیگار الکترونیکی</p>
                            <span className="font-bold">آدرس :  پارکینگ اول</span>
                            <span className="text-orange cursor-pointer" onClick={()=>{swiperRef.current.slideNext()}}>بعدی...</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="md:w-[400px] w-full mx-[0px]">
                        <div className="md:w-[400px] w-full flex flex-col items-start gap-y-[15px]">
                            <div className="flex flex-row gap-x-[15px] items-center ">
                                <span className="font-bold text-[20px]">خیاطی</span>
                                <div className="flex flex-row gap-x-[6px]">
                                    <div onClick={()=>{swiperRef.current.slidePrev()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowRight} className="w-[18px] h-[18px] object-contain" />
                                    </div>
                                    <div onClick={()=>{swiperRef.current.slideNext()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowLeft} className="w-[18px] h-[18px] mr-[2px] object-contain" />
                                    </div>
                                </div>
                            </div>
                            <p>خیاطی زیپ زاپ با ارائه انواع خدمات طراحی، دوخت و تعمیرات البسه آقایان و بانوان</p>
                            <span className="font-bold">آدرس :  طبقه همکف ، راهروی راست ، پلاک A39</span>
                            <span className="text-orange cursor-pointer" onClick={()=>{swiperRef.current.slideNext()}}>بعدی...</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="md:w-[400px] w-full mx-[0px]">
                        <div className="md:w-[400px] w-full flex flex-col items-start gap-y-[15px]">
                            <div className="flex flex-row gap-x-[15px] items-center ">
                                <span className="font-bold text-[20px]">پارکینگ</span>
                                <div className="flex flex-row gap-x-[6px]">
                                    <div onClick={()=>{swiperRef.current.slidePrev()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowRight} className="w-[18px] h-[18px] object-contain" />
                                    </div>
                                    <div onClick={()=>{swiperRef.current.slideNext()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowLeft} className="w-[18px] h-[18px] mr-[2px] object-contain" />
                                    </div>
                                </div>
                            </div>
                            <span className="text-orange cursor-pointer" onClick={()=>{swiperRef.current.slideNext()}}>بعدی...</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="md:w-[400px] w-full mx-[0px]">
                        <div className="md:w-[400px] w-full flex flex-col items-start gap-y-[15px]">
                            <div className="flex flex-row gap-x-[15px] items-center ">
                                <span className="font-bold text-[20px]">نمازخانه</span>
                                <div className="flex flex-row gap-x-[6px]">
                                    <div onClick={()=>{swiperRef.current.slidePrev()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowRight} className="w-[18px] h-[18px] object-contain" />
                                    </div>
                                    <div onClick={()=>{swiperRef.current.slideNext()}} className="flex items-center justify-center rounded-full w-[25px] h-[25px] bg-green">
                                        <Image src={ArrowLeft} className="w-[18px] h-[18px] mr-[2px] object-contain" />
                                    </div>
                                </div>
                            </div>
                            <span className="font-bold">آدرس :  پارکینگ اول</span>
                        </div>
                    </SwiperSlide>
                    
                    
                </Swiper>
                <div className="grid grid-cols-2 gap-x-[10px] gap-y-[10px] w-full md:w-fit">
                    <div onClick={()=>{swiperRef.current.slideTo(0)}} className={"md:w-[130px] w-full h-[130px] bg-[#D9D9D9] rounded-[8px] flex items-center justify-center border-[1px] transition-all duration-500 " + (index_page==0?"border-yellow" : "border-[rgba(0,0,0,0.12);]")}>
                        <Image src={SmookingImg} className="w-[75px] h-[75px] object-contain" />
                    </div>
                    <div onClick={()=>{swiperRef.current.slideTo(1)}} className={"md:w-[130px] w-full h-[130px] bg-[#D9D9D9] rounded-[8px] flex items-center justify-center border-[1px] transition-all duration-500 " + (index_page==1?"border-yellow" : "border-[rgba(0,0,0,0.12);]")}>
                        <Image src={TaioringImg} className="w-[75px] h-[75px] mr-[5px] object-contain" />
                    </div>
                    <div onClick={()=>{swiperRef.current.slideTo(2)}} className={"md:w-[130px] w-full h-[130px] bg-[#D9D9D9] rounded-[8px] flex items-center justify-center border-[1px] transition-all duration-500 " + (index_page==2?"border-yellow" : "border-[rgba(0,0,0,0.12);]")}>
                        <Image src={ParkingImg} className="w-[75px] h-[75px] object-contain" />
                    </div>
                    <div onClick={()=>{swiperRef.current.slideTo(3)}} className={"md:w-[130px] w-full h-[130px] bg-[#D9D9D9] rounded-[8px] flex items-center justify-center border-[1px] transition-all duration-500 " + (index_page==3?"border-yellow" : "border-[rgba(0,0,0,0.12);]")}>
                        <Image src={ParerImg} className="w-[75px] h-[75px] mr-[5px] object-contain" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-y-[10px] md:px-[90px] px-[20px] mt-[40px]">
                <div className="w-full rounded border-[1px] border-[rgba(0,0,0,0.12);] px-[30px] py-[20px] items-center justify-start gap-x-[20px] flex md:flex-row flex-col gap-y-[15px]">
                    <Image src={TaioringImg} className="w-[90px] h-[90px] object-contain" />
                    <div className="flex flex-col md:items-start gap-y-[10px] items-center">
                        <span className="font-bold text-[17px]">خیاطی</span>
                        <p className="text-[14px] text-center">خیاطی زیپ زاپ با ارائه انواع خدمات طراحی، دوخت و تعمیرات البسه آقایان و بانوان</p>
                        <span className="font-bold text-center text-[15px] ">آدرس :  طبقه همکف ، راهروی راست ، پلاک A39</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-y-[20px] md:px-[90px] px-[20px] mt-[40px]">
                <div className="w-full rounded border-[1px] border-[rgba(0,0,0,0.12);] px-[30px] py-[20px] items-center justify-start gap-x-[20px] flex md:flex-row flex-col gap-y-[15px]">
                    <Image src={SmookingImg} className="w-[90px] h-[90px] object-contain" />
                    <div className="flex flex-col md:items-start gap-y-[10px] items-center">
                        <span className="font-bold text-[17px]">اتاق سیگار</span>
                        <p className="text-[14px] text-center">اتاق سیگار و سیگار الکترونیکی</p>
                        <span className="font-bold text-center text-[15px] ">آدرس : پارکینگ اول</span>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-y-[20px] md:px-[90px] px-[20px] mt-[40px]">
                <div className="w-full rounded border-[1px] border-[rgba(0,0,0,0.12);] px-[30px] py-[20px] items-center justify-start gap-x-[20px] flex md:flex-row flex-col gap-y-[15px]">
                    <Image src={ParerImg} className="w-[90px] h-[90px] object-contain" />
                    <div className="flex flex-col md:items-start gap-y-[10px] items-center">
                        <span className="font-bold text-[17px]">نمازخانه</span>
                        <span className="font-bold text-center text-[15px]">آدرس : پارکینگ اول</span>
                    </div>
                 </div>
            </div>
        </>
    )
}

export default MainServices