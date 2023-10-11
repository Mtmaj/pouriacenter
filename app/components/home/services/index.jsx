"use client"
import Image from "next/image";
import ParkingImage from "@/public/icons/parking.svg";
import CarwashImage from "@/public/icons/carwash.svg";
import {useEffect} from "react"
const Services = (props)=>{
    useEffect(()=>{
        opacityanim(3000,"widthanimstart",['line1','line2'])
    })
    async function opacityanim(delay){
        const observer = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(async entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add("opacityanimstart");
                var myItem = document.getElementsByClassName("itemservices")
                for(var i = 0;i<myItem.length;i++){
                    myItem[i].classList.remove("h-[0px]")
                    myItem[i].classList.add("md:h-[150px]")
                    myItem[i].classList.add("h-[100px]")
                    await new Promise(r => setTimeout(r, 400));
                }
            }
            });
        });
        await new Promise(r => setTimeout(r, delay));
        observer.observe(document.querySelector(".services"))
        
    }
    return(
        <div className="flex flex-row items-end md:px-[150px] justify-center md:gap-x-[100px] gap-x-[40px] pb-[40px] px-[20px] services opacity-[0] ">
            <div onClick={()=>{props.set_slide_index(0);props.set_pos("right-[0]")}} className="md:w-[150px] w-[110px] md:h-[150px] h-[120px] relative flex items-center justify-center group">
                <div className="md:w-[150px] w-[110px] md:h-[150px] h-[120px] absolute rounded border-[1px] group-hover:rotate-45 group-hover:border-green transition-all border-[rgba(138,137,137,0.59);]"></div>
                <div className="w-[150px] h-[150px] flex flex-col gap-y-[15px] items-center justify-center">
                    <Image src={CarwashImage} alt="کارواش" className="w-[50px]" />
                    <span className="text-[15px] font-bold">کارواش</span>
                </div>
            </div>
            <div onClick={()=>{props.set_slide_index(1);props.set_pos("right-[0]")}}  className="md:w-[150px] w-[110px] md:h-[150px] h-[120px] relative flex items-center justify-center group">
                <div className="md:w-[150px] w-[110px] md:h-[150px] h-[120px] absolute rounded border-[1px] group-hover:rotate-45 group-hover:border-green transition-all border-[rgba(138,137,137,0.59);]"></div>
                <div className="md:w-[150px] w-[110px] md:h-[150px] h-[120px] flex flex-col gap-y-[15px] items-center justify-center">
                    <Image src={ParkingImage} alt="کارواش" className="w-[50px]" />
                    <span className="text-[15px] font-bold">پارکینگ</span>
                </div>
            </div>
        </div>
    )
}

export default Services