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



function Brands({maxEleman,slider}) {
    
    const swiperRef = useRef()
    const [PageIndex,setPageIndex] = useState(0);
    console.log(PageIndex);
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
    

    if (slider) {
        const newObj = object.slice(12)
        const slideLength = Math.floor(newObj.length/8+1)
        let i= -1;

        return(
            <div className="w-full m-auto">
            <Swiper className="w-full m-auto"
                modules={[Pagination]}
                onSlideChange={(index)=>{setPageIndex(index.realIndex)}}
                onSwiper={(swiper)=>{swiperRef.current = swiper}}
            
            >

                    {
                    Array(slideLength).fill({}).map(
                    ()=>{
                        i++
    
                        return(
                <SwiperSlide>

                            <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[150px]  sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:auto-rows-[200px]">
                            {
                                newObj.slice(i*maxEleman).map(
                                    (item,index)=>{
                                        if (index<=maxEleman-1) {
                                            return <div className=" border-solid border-[1px] border-[#bfbfbf] flex justify-center items-center">{item.img?<Image className="h-full w-full" src={item.img}/>:<p>{item.text}</p>}</div>
                                        }
                                        
                                    }
                                )
    
                            }
                            </section>
                </SwiperSlide>

                        )
    
                    }
                )
                    }
            </Swiper>

            <Pagination slideLength={slideLength}/>
            </div>
        )
    }
    else{
        return(
            <section className="w-full grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] auto-rows-[150px]  sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:auto-rows-[200px]">
            {
                object.map(
                    (item,index)=>{
                        if (index<=maxEleman-1) {
                            return <div className=" border-solid border-[1px] border-[#bfbfbf] flex justify-center items-center">{item.img?<Image className="h-full w-full" src={item.img}/>:<p>{item.text}</p>}</div>
                        }
                        
                    }
                )
            }
    </section>
        )
    }
}

export default Brands