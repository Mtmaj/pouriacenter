"use client"

import Link from "next/link"
import {CiLocationOn} from "react-icons/ci"
import 'swiper/css/free-mode';


import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import 'swiper/css/effect-cards';
import {useSwiper} from "swiper/react";
import {useRef,useState,useEffect} from "react"
import { Autoplay, FreeMode, Mousewheel, Scrollbar,EffectCards } from 'swiper/modules';
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"



const SellItem = ()=>{
    return (
        <div className="w-full flex flex-col rounded-[10px] border-green lg:border-[1px] bg-white">
            <img src="https://s8.uupload.ir/files/group_104_er51.png" />
            <div className="w-full h-full px-[10px] py-[10px] flex flex-col gap-y-[15px] items-center">
                <span className="w-full text-start font-bold">لورم ایپسوم</span>
                <span className="w-full text-start opacity-[0.5] flex items-center gap-x-[5px] text-[14px]"><CiLocationOn className="mb-[4px]" size={17}/>آدرس : طبقه اول ، پلاک 12</span>
                <div className="w-full flex flex-row justify-between items-center">
                    <span className="font-semibold text-[16px]">رهن</span>
                    <span className="text-[#FF4545] font-semibold text-[16px]">50000000</span>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                    <span className="font-semibold text-[16px]">اجاره</span>
                    <span className="text-[#FF4545] font-semibold text-[16px]">50000000</span>
                </div>
                <Swiper
                className="w-full"
                    slidesPerView={"auto"}
                    freeMode={true}
                    spaceBetween={0}
                    modules={[FreeMode]}
                >
                    <SwiperSlide className="flex items-center justify-center">
                        <Link href={""} className="whitespace-nowrap text-[13px] bg-[#D9D9D9] font-bold px-[12px] py-[6px] rounded-full">#اجاره ای</Link>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <Link href={""} className="whitespace-nowrap text-[13px] bg-[#D9D9D9] font-bold px-[12px] py-[6px] rounded-full">#اجاره ای</Link>
                    </SwiperSlide>
                    <SwiperSlide className="flex items-center justify-center">
                        <Link href={""} className="whitespace-nowrap text-[13px] bg-[#D9D9D9] font-bold px-[12px] py-[6px] rounded-full">#اجاره ای</Link>
                    </SwiperSlide>
                </Swiper>
                <Link className="bg-orange text-[13px] mt-[10px] hover:mt-[5px] hover:mb-[5px] transition-all w-fit text-white font-bold px-[12px] py-[6px] rounded" href={"/"}>اطلاعات بیشتر</Link>
            </div>
            
        </div>
    )
}

const Sell = ()=>{
    useEffect(()=>{
        opacityanim(1000,"widthanimstart",[])
    })
    async function opacityanim(delay){
        const observer = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(async entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add("opacityanimstart");
                var myItem = document.getElementsByClassName("mainpartanim")
                for(var i = 0;i<myItem.length;i++){
                    myItem[i].classList.remove("opacity-[0]")
                    myItem[i].classList.add("opacity-[0.4]")
                    await new Promise(r => setTimeout(r, 400));
                }
            }
            });
        });
        await new Promise(r => setTimeout(r, delay));
        observer.observe(document.querySelector(".selllist"))
        
    }
    return (
        <div className="w-full mx-auto w-full md:px-[80px] opacity-[0] selllist px-[0px] flex gap-y-[40px] pb-[40px] lg:flex-row flex-col items-center gap-x-[20px] mb-[30px]">
            <div className="lg:grid grid-cols-3 gap-x-[20px] hidden">
                <SellItem />
                <SellItem />
                <SellItem />
            </div>
            <div className="w-full lg:hidden overflow-hidden pb-[30px]">
                <Swiper
                    className="w-[70%] md:w-[50%] lg:hidden"
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                >
                    <SwiperSlide className="drop-shadow-xl rounded-[10px]">
                        <SellItem />
                    </SwiperSlide>
                    <SwiperSlide className="drop-shadow-xl rounded-[10px]">
                        <SellItem />
                    </SwiperSlide>
                    <SwiperSlide className="drop-shadow-xl rounded-[10px]">
                        <SellItem />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Link href={"/"} className="bg-white drop-shadow-[0px_3px_10px_rgba(0,0,0,0.14)] px-[10px] whitespace-nowrap py-[5px] rounded-[5px] hover:mb-[10px] transition-all">مشاهده همه</Link>
            
        </div>
    )
}

export default Sell