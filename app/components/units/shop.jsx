"use client"
import closeIcon from '@/public/icons/close(2).svg';
import whatsapp from '@/public/icons/whatsapp_.svg';
import instagram from '@/public/icons/instagram.svg';
import shop from "@/public/images/shop.svg"
import Image from 'next/image';
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';

import "swiper/css";
import { useState } from 'react';




const Slideshop = ()=>{
    return(
            <Swiper
            className='w-full'
            modules={[EffectCards]}
                effect='cards'
                cardsEffect={{
                    slideShadows:false,
                    perSlideOffset:8,
                    perSlideRotate:2
                    
                  }}
                  
            >
                <SwiperSlide className=''><Image className='rounded-xl m-auto' src={shop}/></SwiperSlide>
                <SwiperSlide className=''><Image className='rounded-xl m-auto' src={shop}/></SwiperSlide>
                <SwiperSlide className=''><Image className='rounded-xl m-auto' src={shop}/></SwiperSlide>

            </Swiper>

            
    )
}

const SingleTag = (props)=>{
    return(
        <>
            <small className='bg-white flex items-center text-center rounded-2xl shadow-3xl px-2'>{props.text}</small>
        </>
    )
}


const Shop = ()=>{
    const [display, setDisplay]=useState("flex")
    return(
        <section className={`${display} w-full relative flex-col lg:flex-row border-solid border-2 border-[#C0C0C0] rounded-md py-6`}>
            <button onClick={()=>{setDisplay("hidden")}} className='p-1 bg-[#FD6D6D] rounded-lg absolute left-0 top-0 m-2 z-10'><Image width={28} src={closeIcon}/></button>

            <div className='md:w-[35%] w-full m-auto'>
                <Slideshop/>
            </div>

            <div className='flex flex-col gap-3 lg:w-[60%] w-full p-4 lg:p-0'>
                <div className='flex gap-4'>
                    <p className='font-bold'>لورم ایپسوم</p>
                    <p className='text-white px-3 text-center shadow-3xl  rounded-2xl bg-[#FD6D6D]'>پوشاک</p>
                </div>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
                <small> شماره تماس: 090xxx231</small>
                <small>آدرس :طبقه اول ، راهرو راست ، پلاک C6</small>
                <small className='flex gap-2 items-center'>
                    <p>شبکه های اجتماعی :</p>
                    <a className='hover:-translate-y-1 duration-300' href=""><Image width={18} src={instagram}/></a>
                    <a className='hover:-translate-y-1 duration-300' href=""><Image width={18} src={whatsapp}/></a>
                </small>
                <div className='flex mt-auto gap-2'>
                    <SingleTag text="#تیشرت"/>
                    <SingleTag text="#تیشرت"/>
                    <SingleTag text="#تیشرت"/>
                </div>
            </div>

        </section>
    )
}

export default Shop