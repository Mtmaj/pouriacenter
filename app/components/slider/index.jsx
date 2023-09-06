"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import {useSwiper} from "swiper/react";
import {useRef,useState,useEffect} from "react"
import { Autoplay } from 'swiper/modules';
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"


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
                    <div className="w-full flex flex-row items-center gap-x-[10px]">
                        <div onClick={()=>{swiperRef.current.slideNext()}} className="mr-[5px] md:block hidden hover:mr-[0] hover:ml-[5px] transition-all"><IoIosArrowForward size={30}/></div>
                        <Swiper  modules={[Autoplay]} className="w-full md:max-h-[400px] rounded md:min-h-[400px] h-[200px]" loop={true} autoplay={{ delay: 4000, disableOnInteraction: false }} dir="ltr" onSlideChange={(index)=>{SetPageIndex(index.realIndex)}} slidesPerView={1} onSwiper={(swiper)=>{swiperRef.current = swiper}}>
                            {props.slides.map((item)=>{
                                return (<SwiperSlide className="text-center flex itmes-center justify-center w-full h-full">
                                    <img className="object-cover min-w-full min-h-full" src={"http://"+item}/>
                                </SwiperSlide>)
                            })}
                            
                        </Swiper>
                        <div onClick={()=>{swiperRef.current.slidePrev()}} className="ml-[5px] md:block hidden hover:ml-[0] hover:mr-[5px] transition-all" ><IoIosArrowBack size={30} /></div>
                    </div>
                    <div className="flex flex-row gap-x-[10px]">
                        {props.slides.map((item,index)=>{
                            return (<div className={"h-[7px] w-[7px] rounded-full transition-all duration-500 " + (PageIndex == index?"bg-orange":"bg-black opacity-[0.1]")}></div>)
                        })}
                        
                    </div>
                </div>
            }
        </>
    )
}

export default Slider