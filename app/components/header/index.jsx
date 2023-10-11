"use client"

import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import Link from "next/link";
import { useEffect,useState } from "react";
import {IoMenu} from "react-icons/io5"

const Line = ()=>{
    return (
        <div className="w-full min-h-[1px] bg-black opacity-[0.05] rounded"></div>
    )
}

const HeaderItem = (props)=>{
    return (
        <div className={"relative text-[13px] group hover:text-orange font-semibold transition-all duration-500"}>
            <a href={props.link}>{props.text}</a>
            <div className="absolute h-[2px] w-0 group-hover:bg-orange group-hover:w-full lg:mt-[4px] mt-[2px] bg-black transition-all duration-500 rounded-full"></div>
        </div>
    );
}


const Header = ()=>{
    const [MenuIsOpen,SetMenuIsOpen] = useState("h-[0]")
    const [is_first,set_is_first] = useState(true)
    const [show_line,set_show_line] = useState("opacity-[0]")
    function OpenMenu(){
        if(MenuIsOpen == "h-[0]"){
            SetMenuIsOpen("h-[300px]")
        }else{
            SetMenuIsOpen("h-[0]")
        }
        
    }
    function scrollWindow(){
        if(window.scrollY > 10 && show_line=="opacity-[0]"){
            set_show_line("opacity-[1]")
        }else if(window.scrollY < 10 && show_line=="opacity-[1]"){
            set_show_line("opacity-[0]")
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollWindow)
        if(is_first){
            
            const observer = new IntersectionObserver(entries => {
            // Loop over the entries
                entries.forEach(entry => {
                // If the element is visible
                if (entry.isIntersecting) {
                    // Add the animation class
                    entry.target.classList.add('opacityanimstart');
                }
                });
            });
            observer.observe(document.querySelector(".header"))
        }
        set_is_first(false)
        
    })



    return (
        <div className="w-full fixed bg-white items-center header opacity-[0] z-[100]">
            <div className="w-full lg:px-[100px] px-[20px] lg:mt-[0] mt-[5px] mb-[-5px] flex justify-center">
                <div className="w-full items-center gap-x-[40px] justify-between  flex flex-row">
                    <div className="w-full hidden lg:flex justify-between font-regular">
                        <HeaderItem text={"صفحه اصلی"} link={"/"} />
                        <HeaderItem text={"واحد های تجاری"} link={"/shops"} />
                        <HeaderItem text={"برند ها"} link={"/shops?is_brand=true"} />
                        <HeaderItem text={"واحد فروش و اجاره"}  link={"/sellandrent"}/>
                    </div>
                    <Link href={"/"} className="flex flex-col items-center scale-[0.8]">
                        <Image src={LogoImg} alt={"Logo"} className={" md:mr-[0] mr-[-20px] object-contain "+(show_line == "opacity-[0]"?"md:min-w-[100px] min-w-[90px]":"md:min-w-[90px] min-w-[90px]")} />
                        <div className={"md:flex flex-col text-[15px] items-center mt-[-15px] hidden font-extrabold "+(show_line == "opacity-[0]"?"md:flex":"md:hidden")}>
                            <span className="text-orange">POURIA</span>
                            <span className="mt-[-4px]">CENTER</span>
                        </div>
                    </Link>
                    <div className="w-full flex justify-between hidden lg:flex">
                        <HeaderItem text={"اخبار"} link={"/news"} />
                        <HeaderItem text={"خدمات"} link={"/services"} />
                        <HeaderItem text={"تماس با ما"} link={"/contactus"} />
                        <HeaderItem text={"درباره ما"} link={"/aboutus"} />
                    </div>
                    <div className="lg:hidden">
                        <IoMenu onClick={OpenMenu} size={30} />
                    </div>
                </div>
            </div>
            <div className="w-full px-[20px] md:mt-[5px] lg:hidden">
                <div className="lg:hidden rounded bg-black h-[2px] opacity-[0.1]"></div>
            </div>
            <div className={`w-full px-[90px] transition-all md:mt-[-10px] lg:block hidden ${show_line} `}>
                <div className="rounded bg-black h-[2px] opacity-[0.1]"></div>
            </div>
            <div className={`absolute w-full drop-shadow overflow-hidden transition-height duration-500 bg-white z-[100] lg:hidden ${MenuIsOpen}`}>
                <div className="flex flex-col items-start gap-y-[10px] px-[20px] pb-[15px] max-h-[300px] overflow-y-scroll pt-[15px]">
                        <HeaderItem text={"صفحه اصلی"} link={"/"} />    
                        <Line />
                        <HeaderItem text={"واحد های تجاری"} link={"/shops"} />
                        <Line />
                        <HeaderItem text={"برند ها"} link={"/shops?is_brand=true"} />
                        <Line />
                        <HeaderItem text={"واحد فروش و اجاره"} link={"/sellandrent"} />
                        <Line />
                        <HeaderItem text={"اخبار"} link={"/news"} />
                        <Line />
                        <HeaderItem text={"خدمات"} link={"/services"} />
                        <Line />
                        <HeaderItem text={"تماس با ما"} link={"/contactus"} />
                        <Line />
                        <HeaderItem text={"درباره ما"} link={"/aboutus"} />
                </div>
            </div>
            
        </div>
    )
}

export default Header