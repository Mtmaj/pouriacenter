import CoffeeLogo from "@/public/icons/coffee.svg";
import CartLogo from "@/public/icons/cart.svg";
import BrandLogo from "@/public/icons/tag.svg";
import GoldLogo from "@/public/icons/diamond.svg";
import Image from "next/image";
import { useEffect } from "react";
const MainPartItem = (props)=>{
    return (
        <div className={`w-full group flex min-h-[250px] flex-col items-center border-[#bdbdbd] lg:border-l-[1px] lg:border-t-[1px] lg:border-b-[1px] lg:border-r-[0] border-[1px] ${props.border} `}>
            <div className="h-full mainpartanim w-full flex flex-col items-center group-hover:opacity-[1] transition-all duration-500 opacity-[0]">
                <div className="h-full w-full flex items-center justify-center">
                    <Image src={props.icon} alt={props.text} />
                </div>
                <span className="w-full text-center py-[4px] group-hover:py-[7px] transition-all text-[15px] group-hover:text-[16px] group-hover:text-orange group-hover:bg-[#D9D9D9] font-bold">{props.text}</span>
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
                    myItem[i].classList.add("opacity-[0.4]")
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
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 opacity-[0] lg:gap-x-[0] lg:gap-y-[0] gap-[30px] w-full gridmainpart">
                <MainPartItem text="کافی شاپ" icon={CoffeeLogo} />
                <MainPartItem text="واحد های تجاری" icon={CartLogo}/>
                <MainPartItem text="برند" icon={BrandLogo} />
                <MainPartItem border={"lg:!border-l-0"} text={"بورس طلا"} icon={GoldLogo} />
            </div>
        </div>
    )
}

export default MainPart