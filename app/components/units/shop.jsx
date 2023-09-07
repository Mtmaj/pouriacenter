"use client"
import closeIcon from '@/public/icons/close(2).svg';
import whatsapp from '@/public/icons/whatsapp_.svg';
import instagram from '@/public/icons/instagram.svg';
import Image from 'next/image';
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';

import "swiper/css";
import { useState } from 'react';




const Slideshop = (props)=>{
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
                {props.images.map((item,index)=>{
                    return (<SwiperSlide className='w-[100px] h-full'><img className='rounded-xl min-w-[250px] w-[250px] h-[300px] object-cover m-auto' src={"https://"+item}/></SwiperSlide>)
                })}
                

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


const Shop = (props)=>{
    return(
        <>
        {props.open_shop==null?<></>:
        <section className={`flex w-full my-8 relative ${props.class_show} flex-col transition-all duration-500 lg:flex-row border-solid border-2 border-[#C0C0C0] rounded-md py-6`}>
            <button onClick={()=>{props.set_open_shop(null)}} className='p-1 bg-orange rounded-lg absolute left-0 top-0 m-2 z-10'><Image width={28} src={closeIcon}/></button>

            <div className='md:w-[35%] w-full m-auto'>
                <Slideshop images={props.open_shop.item.images}/>
            </div>

            <div className='flex flex-col gap-3 lg:w-[60%] w-full p-4 lg:p-0'>
                <div className='flex gap-4'>
                    <p className='font-bold'>{props.open_shop.item.name}</p>
                    <p className='text-white px-3 text-center shadow-3xl  rounded-2xl bg-orange'>{props.open_shop.item.category}</p>
                </div>
                <p>{props.open_shop.item.description}</p>
                <small>آدرس :طبقه اول ، راهرو راست ، پلاک C6</small>
                <small className='flex gap-2 items-center'>
                    <p>شبکه های اجتماعی :</p>
                    <a className='hover:-translate-y-1 duration-300' href={props.open_shop.item.social_media}><Image width={18} src={instagram}/></a>
                </small>
                <div className='flex mt-auto gap-2'>
                    {props.open_shop.item.tags.map((item,index)=>{
                        return <SingleTag text={"#"+item}/>
                    })}
                </div>
            </div>

        </section>
                }
                </>
    )
}

export default Shop