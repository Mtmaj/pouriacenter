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
import { get_sell } from "@/app/utils/network/sell";

export const SellItem = (props)=>{
    return (
        <div className="w-full flex flex-col rounded-[10px] border-[#989797] border-[1.5px] bg-white ">
            <div className="relative flex items-start justify-end h-[200px] w-full">
                <div className="absolute">
                    <Image src={LogoImg} alt="پوریا سنتر" />
                </div>
                <img src={"https://"+props.item.images[0]} className="rounded-t-[10px] h-[200px] w-full shadow object-cover" />
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
import {useCallback} from "react";

const Sell = ()=>{
    const [data,set_data] = useState(null)
    if(data == null){
        get_sell({}).then((data_get)=>{
            set_data([...data_get.slice(0,3)])
        })
    }
    return (
      <div className="container md:px-[100px] px-[20px] mx-auto flex gap-y-[40px] lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col items-start md:w-[400px] w-full px-[20px] md:px-[0px] gap-y-[25px]">
            <div className="w-fit items-start flex-col flex gap-y-[5px]">
                <span className="flex flex-row items-center gap-x-[5px] text-bold md:text-[18px] font-bold text-[15px] whitespace-nowrap">تازه های فروش و اجاره</span>
                <div className="w-[150%] flex flex-col items-start gap-y-[4px]">
                    <div className="w-full bg-green h-[2px] rounded"></div>
                    <div className="w-[60%] bg-green opacity-[0.5] rounded h-[2px]"></div>
                </div>
            </div>
            <p>برای بررسی موارد بیشتر و خرید ، اجاره و رهن در مرکز خرید پوریا از بخش واحد های فروش و اجاره دیدن کنید</p>
            <Link href={"/sellandrent"} className="text-white bg-orange px-[20px] py-[5px] rounded text-[14px]">مشاهده موارد بیشتر ...</Link>
        </div>
        <div className="md:w-[400px] w-full overflow-hidden pb-[30px]">
                <Swiper
                    className="md:w-[70%] w-[90%]"
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                >
                    {data==null?<></>:data.map((item)=>{
                        return <SwiperSlide className="drop-shadow-xl rounded-[10px]">
                            <SellItem item={item} />
                        </SwiperSlide>
                    })}
                    
                </Swiper>
            </div>
      </div>  
    );
}

export default Sell