"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import {useSwiper} from "swiper/react";
import {useRef,useState,useEffect} from "react"
import { Autoplay } from 'swiper/modules';
import ArrowRight from "@/public/icons/ArrowRight.svg"
import ArrowLeft from "@/public/icons/Arrowleft.svg"
import Image from "next/image";

const Slider = (props)=>{
    console.log(props.slides)
    const swiperRef = useRef()
    const [PageIndex,SetPageIndex] = useState(0)
    useEffect(()=>{
        opacityanim(1000)
        
        
    })
    async function opacityanim(delay){
        const observer = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('opacityanimstart');
            }
            });
        });
        await new Promise(r => setTimeout(r, delay));
        observer.observe(document.querySelector(".slider"))
    }
    return (
        <>
            {props.slides.length == 0?<></>:
                <div className="w-full slider flex opacity-[0] flex-col items-center gap-y-[20px]">
                    <div className="w-full flex flex-row justify-center items-end relative gap-x-[10px]">
                        <Swiper  modules={[Autoplay]} className="w-full md:max-h-[470px] md:min-h-[470px] h-[400px]" loop={true} autoplay={{ delay: 4000, disableOnInteraction: false }} dir="ltr" onSlideChange={(index)=>{SetPageIndex(index.realIndex)}} slidesPerView={1} onSwiper={(swiper)=>{swiperRef.current = swiper}}>
                            {props.slides.map((item)=>{
                                return (<SwiperSlide className="text-center flex itmes-center justify-center w-full h-full">
                                    <img className="object-cover min-w-full min-h-full" src={"https://"+item}/>
                                </SwiperSlide>)
                            })}
                            
                        </Swiper>
                        <div className="absolute z-[1] mb-[10px] flex flex-row gap-x-[5px] items-center">
                            <Image onClick={()=>{swiperRef.current.slideNext()}} src={ArrowRight} className="w-[20px] h-[20px] object-contain" />
                            <div className="flex flex-row gap-x-[10px]">
                                {props.slides.map((item,index)=>{
                                    return (<div className={"h-[7px] w-[7px] rounded-full transition-all duration-500 " + (PageIndex == index?"bg-orange":"bg-[#d1d1d1]")}></div>)
                                })}
                            </div>
                            <Image onClick={()=>{swiperRef.current.slidePrev()}} src={ArrowLeft} className="w-[20px] h-[20px] object-contain" />
                        </div>
                    </div>
                    
                </div>
            }
        </>
    )
}

export default Slider