"use client"
import closeIcon from '@/public/icons/close(2).svg';
import whatsapp from '@/public/icons/whatsapp_.svg';
import instagram from '@/public/icons/instagram.svg';
import ArrowRight from "@/public/icons/ArrowRight.svg"
import ArrowLeft from "@/public/icons/Arrowleft.svg"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import {useSwiper} from "swiper/react";
import {useRef,useState,useEffect,useCallback} from "react"
import { Autoplay ,EffectCards} from 'swiper/modules';
import Image from "next/image";
import { getall_shop } from "@/app/utils/network/shop";
const useGetDevice = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : null);
    const devices = useRef({sm: 576, md: 768, lg: 1024, xl: 1080, xxl: 1536});

    const getDevice = useCallback(() => {
        switch (true) {
            case width >= devices.current.xxl:
                return "xxl";
            case width >= devices.current.xl:
                return "xl";
            case width >= devices.current.lg:
                return "lg";
            case width >= devices.current.md:
                return "md";
            case width < devices.current.sm:
                return "sm";
            default:
                return "sm"
        }
    }, [width]);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {devices, getDevice, width};
};
const BrandsSlide = ()=>{
    const [prev,set_prev] = useState(7)
    const [data,set_data] = useState(null)
    const [item_select,set_item_select] = useState(null)
    if(data==null){
        getall_shop({is_brand:true}).then((data_get)=>{
            set_data(data_get.data)
        })
    }
    const w = useGetDevice()
    if(w.getDevice() == "sm"){
        if(prev == 7){
        set_prev(3)}
    }
    if(w.getDevice() != "sm"){
        if(prev == 3){
        set_prev(7)}
    }
    const swiperRef = useRef()
    return (
        <>
            <div className="container md:px-[90px] px-[10px] flex mx-auto flex-row items-center gap-x-[10px]">
                <Image onClick={()=>{swiperRef.current.slideNext()}} src={ArrowRight} className="w-[20px] h-[20px] object-contain" />
                <Swiper  modules={[Autoplay]} className="w-full" loop={true} autoplay={{ delay: 4000, disableOnInteraction: false }} dir="ltr" slidesPerView={prev}>
                    {data == null?<></>:
                        data.map((item)=>{
                            return <SwiperSlide className="flex items-center justify-center">
                                <div onClick={()=>{set_item_select(item)}} className="w-[70px] mx-auto h-[70px] rounded-full group overflow-hidden cursor-pointer border-[1px] flex items-center border-[rgba(0,0,0,0.38)] justify-center">
                                    {item.logo == null?
                                        <span className="whitespace-nowrap text-[12px] group-hover:scale-[1.3] transition-all">{item.name}</span>:
                                        <img src={"https://"+item.logo} className="w-full h-full group-hover:scale-[1.3] transition-all  object-cover rounded-full" />    
                                    }
                                </div>
                            </SwiperSlide>
                        }
                    )}
                </Swiper>
                <Image onClick={()=>{swiperRef.current.slideNext()}} src={ArrowLeft} className="w-[20px] h-[20px] object-contain" />
            </div>
            <Shop class_show={item_select==null?"invisible opacity-[0]":""} item={item_select} set_item={set_item_select} />
        </>
    )
}
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
        <div className='container md:px-[100px] px-[20px] mx-auto'>
        {props.item==null?<></>:<div className={`flex  my-8 relative ${props.class_show} flex-col transition-all duration-500 lg:flex-row border-solid border-2 border-[#C0C0C0] rounded-md py-6`}>
            <button onClick={()=>{props.set_item(null)}} className='p-1 bg-orange rounded-lg absolute left-0 top-0 m-2 z-10'><Image width={28} src={closeIcon}/></button>

            <div className='md:w-[35%] w-full m-auto'>
                <Slideshop images={props.item.images}/>
            </div>

            <div className='flex flex-col gap-3 lg:w-[60%] w-full p-4 lg:p-0'>
                <div className='flex gap-4'>
                    <p className='font-bold'>{props.item.name}</p>
                    <p className='text-white px-3 text-center shadow-3xl  rounded-2xl bg-orange'>{props.item.category}</p>
                </div>
                <p>{props.item.description}</p>
                <small>{props.item.address}</small>
                <small className='flex gap-2 items-center'>
                    <p>شبکه های اجتماعی :</p>
                    <a className='hover:-translate-y-1 duration-300' href={props.item.social_media}><Image width={18} src={instagram}/></a>
                </small>
                <div className='flex mt-auto gap-2'>
                    {props.item.tags.map((item,index)=>{
                        return <SingleTag text={"#"+item}/>
                    })}
                </div>
            </div>

        </div>}
            </div>
    )
}

export default BrandsSlide