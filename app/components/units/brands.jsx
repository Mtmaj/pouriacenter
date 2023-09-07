'use client'
import shop from "@/public/images/shop.svg"
import { useState ,useRef} from "react"
import Image from "next/image"
import {Swiper, SwiperSlide } from "swiper/react";
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"



let object = [
    {img:shop},
    {img:shop},
    {img:shop},
    {img:shop},
    {img:shop},
    {img:shop},
    {text:"1"},
    {text:"2"},
    {text:"3"},
    {text:"4"},
    {text:"5"},
    {text:"6"},
    {text:"7"},
    {text:"8"},
    {text:"9"},
    {text:"10"},
    {text:"11"},
    {text:"12"},
    {text:"13"},
    {text:"14"},
    {text:"15"},
    {text:"16"},
    {text:"17"},
    {text:"18"},
    {text:"19"},
    {text:"20"},

];



function Brands({set_open_shop,data,startElement,maxEleman,slider}) {
    const swiperRef = useRef()
    const [PageIndex,setPageIndex] = useState(0);
    function Pagination({slideLength}) {
    
        let index = 0
        return(
            <section className=" w-full flex justify-center my-4">
                <button onClick={()=>{swiperRef.current.slideNext()}} className=" shadow-3xl p-2 rounded-lg"><IoIosArrowForward/></button>
                <div className="flex items-center bg-[#C0C0C0] px-2 shadow-3xl gap-2" dir="ltr">
                { Array(slideLength).fill({}).map(
                ()=>{
                    index++
                    return <p className={`${PageIndex+1 == index ? `bg-[#FF9D9D] text-white`:` bg-none text-black`} w-8 h-8 rounded-md flex justify-center items-center`}>{index}</p>
                }
            )}
                </div>
                
                <button onClick={()=>{swiperRef.current.slidePrev()}} className=" shadow-3xl p-2 rounded-lg"><IoIosArrowBack/></button>
    
            </section>
        )
    }
    

    
    return(
            <section className="w-full grid grid-cols-2 auto-rows-[150px]  sm:grid-cols-4 sm:auto-rows-[200px]">
            {
                data.slice(startElement,startElement+maxEleman).map(
                    (item,index)=>{
                        return <div onClick={()=>{set_open_shop({item,index:data.findIndex((data_list)=>data_list._id==item._id)})}} className=" border-solid border-[1px] border-[#bfbfbf] flex justify-center items-center">{item.logo?<img className="h-full w-full object-cover" src={"https://"+item.logo}/>:<p>{item.name}</p>}</div>   
                    }
                )
            }
    </section>
        )
}

export default Brands