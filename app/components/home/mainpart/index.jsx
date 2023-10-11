import CoffeeLogo from "@/public/icons/coffee.svg";
import CartLogo from "@/public/icons/cart.svg";
import BrandLogo from "@/public/icons/tag.svg";
import GoldLogo from "@/public/icons/diamond.svg";
import Image from "next/image";
import Coffe from "@/public/images/coffe.jpeg"
import brand from "@/public/images/brand.png"
import tala from "@/public/images/tala.jpeg"
import tejari from "@/public/images/tajari.jpg"
import { useEffect } from "react";
const MainPartItem = (props)=>{
    return (
        <div onClick={()=>{window.location.href=props.href}} className={`w-full group cursor-pointer flex min-h-[250px] flex-col items-center `}>
            <div className="h-full relative mainpartanim w-full flex flex-col items-center justify-end transition-all duration-500 opacity-[0]">
                <div className="h-full w-full flex items-center justify-center">
                    <Image objectFit="cover" className="object-cover w-full h-full" src={props.icon} alt={props.text} />
                </div>
                <div className="absolute h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,#000_100%);]"></div>
                <div className="w-full absolute pb-[8px] group-hover:h-full h-[30px] flex items-center transition-all group-hover:bg-[rgba(0,0,0,0.6)] duration-500 bg-transparent">
                    <span className="w-full text-white duration-500 text-center py-[4px] group-hover:py-[7px] transition-all text-[15px]">{props.text}</span>
                </div>
                
            </div>
        </div>
    )
}

const MainPart = ()=>{
    useEffect(()=>{
        opacityanim(2000,"widthanimstart",['line1','line2'])
    })
    async function opacityanim(delay){
        const observer = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(async entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add("opacityanimstart");
                var myItem = document.getElementsByClassName("mainpartanim")
                for(var i = 0;i<myItem.length;i++){
                    myItem[i].classList.remove("opacity-[0]")
                    myItem[i].classList.add("opacity-[1]")
                    await new Promise(r => setTimeout(r, 400));
                }
            }
            });
        });
        await new Promise(r => setTimeout(r, delay));
        observer.observe(document.querySelector(".gridmainpart"))
        
    }
    return (
        <div className="container mx-auto md:px-[100px] px-[60px] py-[20px]">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 opacity-[0] gap-[30px] w-full gridmainpart">
                <MainPartItem text="کافی شاپ" icon={Coffe} href={"/shops?category=کافی شاپ"} />
                <MainPartItem text="واحد های تجاری" icon={brand} href={"/shops"}/>
                <MainPartItem text="برند" icon={tejari} href="/shops?is_brand=true"/>
                <MainPartItem text={"بورس طلا"} icon={tala} href={"/shops?category=بورس طلا"} />
            </div>
        </div>
    )
}

export default MainPart