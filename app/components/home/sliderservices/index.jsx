"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import {useSwiper} from "swiper/react";
import {useRef,useState,useEffect} from "react"
import { Autoplay } from 'swiper/modules';
import {TfiArrowCircleLeft,TfiArrowCircleRight,tficlose} from "react-icons/tfi"
import {AiOutlineCloseCircle} from "react-icons/ai"

const SliderServices = (props)=>{
    const swiperRef = useRef()
    useEffect(()=>{
        if(swiperRef.current != null){
            swiperRef.current.slideTo(props.slide_index)
        }
    })
    return (
        <>
            <div className={`w-full h-[100vh]  fixed z-[200] ${props.pos} bg-white transition-all duration-500`}>
                <div className="w-full h-full flex flex-col items-center gap-y-[10px]">
                    <div className="flex flex-row w-full items-center justify-center gap-x-[10px] py-[40px] bg-[rgba(0,0,0,0.1)]">
                        <div onClick={()=>{swiperRef.current.slideNext()}} className="mr-[5px] hover:mr-[0] hover:ml-[5px] transition-all"><TfiArrowCircleRight size={30}/></div>
                        <div onClick={()=>{props.set_pos("right-[-100%]")}} className="transition-all"><AiOutlineCloseCircle size={40}/></div>
                        <div onClick={()=>{swiperRef.current.slidePrev()}} className="ml-[5px] hover:ml-[0] hover:mr-[5px] transition-all" ><TfiArrowCircleLeft size={30} /></div>
                    </div>
                    <div className="w-full h-full overflow-y-auto">
                    <Swiper  className="w-full h-full rounded overflow-y-auto" loop={true} dir="ltr" slidesPerView={1} onSwiper={(swiper)=>{swiperRef.current = swiper}}>
                        <SwiperSlide className="text-center overflow-y-auto  flex itmes-center justify-center w-full h-full">
                            <div className="flex flex-col items-end w-full h-full overflow-y-auto mx-auto md:px-[200    px] px-[30px] gap-y-[10px]">
                                <span className="text-[20px] text-orange w-full text-center">کارواش</span>
                                <img className="w-full h-[400px] object-cover" src="https://cdn.balad.ir/crowd-images/all/original/ad6200642f6f485d96c0180cca8a8185-ei_16610997172898768462163043445448.jpg?x-img=v1/crop,x_0,y_1367,w_2250,h_1265/autorotate" />
                                <span className="text-[16px] text-orange">کاواش مجتمع پوریا</span>
                                <p dir="rtl" className="text-justify" >کارواش پوریا در طبقه اول پارکینگ P1 ، سرویس کامل کارواش را با بهترین کیفیت ارائه می‌نماید.</p>
                                <span dir="rtl" className="mb-[20px]"><span className="text-orange"  >آدرس</span> : پارکینگ اول</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="text-center flex itmes-center justify-center w-full h-full">
                            <div className="flex flex-col items-end w-full h-full overflow-y-auto w-full mx-auto md:px-[200px] px-[30px] gap-y-[10px]">
                                <span className="text-[20px] text-orange w-full text-center">پارکینگ عمومی</span>
                                <img className="w-full h-[400px] object-cover" src="https://www.sepehrc.ir/upload/thumb1/gallery/1645357188.jpg" />
                                <span className="text-[16px] text-orange">پارکینگ  مجتمع پوریا</span>
                                <p dir="rtl" className="text-justify" >در3 طبقه با کفپوش سنگ و ظرفیت حدودا 200 اتومبیل طراحی شده است. شماره پلاک خودروها پس از ورود به پارکینگ به صورت اتوماتیک ثبت شده و در زمان خروج، یک اپراتور جهت اسکن قبض و محاسبه نرم‌افزاری هزینه حضور دارد تا ظرف چند ثانیه خودرو؛ در لوپ خروج قرار گیرد. از این طریق از تجمع خودروها در خروجی و ایجاد ترافیک جلوگیری به عمل می‌آید.
وجود 2 دستگاه آسانسور ،3 دستگاه رمپ در کل طبقات از دیگر تجهیزات پارکینگ مرکزخرید پوریا هستند. </p>
                                <span dir="rtl"><span className="text-orange"  >آدرس</span> : طبقات p1 تا p3</span>
                                <span><span className="text-orange">ساعت کاری</span> : همه روزه از ساعت8:30 تا 23</span>
                                <span className="mb-[20px]"><span className="text-orange ">تلفن</span> :    <span className="bg-orange rounded px-[5px] py-[1px] text-white text-[13px]">02155148107</span> </span>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SliderServices