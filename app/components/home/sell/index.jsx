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
import Image from "next/image";
import LogoImg from "@/public/images/logo.png";



export const SellItem = (props)=>{
    return (
        <div className="w-full flex flex-col rounded-[10px] border-[#989797] border-[1.5px] bg-white ">
            <div className="relative flex items-start justify-end h-[300px] w-full">
                <div className="absolute">
                    <Image src={LogoImg} alt="پوریا سنتر" />
                </div>
                <img src={"https://"+props.item.images[0]} className="rounded-t-[10px] h-[300px] w-full shadow object-cover" />
            </div>
            
            <div className="w-full h-full px-[13px] py-[10px] flex flex-col gap-y-[10px] items-center">
                <div className="flex w-full justify-start">
                    <div className="flex flex-col items-start gap-y-[4px] mb-[3px]">
                        <span className="w-full text-start font-bold">{props.item.name}</span>
                        
                    </div>
                </div>
                
                <span className="w-full text-start opacity-[1] font-semibold flex items-center gap-x-[5px] text-[14px]"><CiLocationOn className="mb-[4px]" size={17}/>آدرس : {props.item.address}</span>
                {props.item.price == null? 
                (<><div className="w-full flex flex-row justify-between items-center bg-[#F4F4F4] rounded py-[3px] px-[5px]">
                    <span className="font-semibold text-[15px]">رهن</span>
                    <span className="text-[#FF4545] font-semibold text-[15px]">{props.item.mortgage_price} تومن</span>
                </div>
                <div className="w-full flex flex-row justify-between items-center bg-[#F4F4F4] rounded py-[3px] px-[5px]">
                    <span className="font-semibold text-[15px]">اجاره</span>
                    <span className="text-[#FF4545] font-semibold text-[15px]">{props.item.rent_price} تومن</span>
                </div></>):<div className="w-full flex flex-row justify-between items-center bg-[#F4F4F4] rounded py-[3px] px-[5px]">
                    <span className="font-semibold text-[15px]">قیمت</span>
                    <span className="text-[#FF4545] font-semibold text-[15px]">{props.item.price} تومن</span>
                </div>}
                <div className="w-full flex flex-row justify-between items-center bg-[#F4F4F4] rounded py-[3px] px-[5px]">
                    <span className="font-semibold text-[15px]">متراژ</span>
                    <span className="text-[#FF4545] font-semibold text-[15px]">{props.item.meterage} متر</span>
                </div>
                <div className="w-full flex flex-row">
                    {props.item.tags.map((item)=>{
                        <div className="whitespace-nowrap cursor-pointer text-[12px] bg-[#D9D9D9] font-bold px-[12px] py-[4px] rounded-full">#{item}</div>
                    })}
                    
                </div>
                
                <Link className="text-black bg-orange text-white w-full text-center text-[13px] mt-[5px] hover:mt-[2.5px] hover:mb-[2.5px] transition-all w-fit font-bold px-[12px] py-[6px] rounded" href={{pathname:"/sellandrent/sell",query:{"id":props.item._id,"is_sell":!(props.item.price == null)}}}>اطلاعات بیشتر</Link>
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
            {/* <div className="lg:grid grid-cols-3 gap-x-[20px] hidden">
                <SellItem />
                <SellItem />
                <SellItem />
            </div> */}
            {/* <div className="w-full lg:hidden overflow-hidden pb-[30px]">
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
            </div> */}
            <Link href={"/"} className="bg-white drop-shadow-[0px_3px_10px_rgba(0,0,0,0.14)] px-[10px] whitespace-nowrap py-[5px] rounded-[5px] hover:mb-[10px] transition-all">مشاهده همه</Link>
            
        </div>
    )
}

export default Sell