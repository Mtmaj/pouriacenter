"use client"

import Image from "next/image";
import LogoImg from "@/public/images/logo.png";
import Link from "next/link";
import { useEffect } from "react";


const HeaderItem = (props)=>{
    return (
        <div className={"relative text-[13px] group hover:text-[#FE7D02] transition-all duration-500"}>
            <Link href={"/"} >{props.text}</Link>
            <div className="absolute h-[2px] w-0 group-hover:bg-[#FE7D02] group-hover:w-full mt-[4px] bg-black transition-all duration-500 rounded-full"></div>
        </div>
    );
}


const Header = ()=>{
    
    
    useEffect(()=>{
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
    })
    return (
        <div className="header w-full px-[120px]">
            <div className="w-full items-center gap-x-[40px]  flex flex-row">
                <div className="w-full hidden lg:flex justify-between font-regular">
                    <HeaderItem text={"صفحه اصلی"} />
                    <HeaderItem text={"واحد های تجاری"} />
                    <HeaderItem text={"برند ها"} />
                    <HeaderItem text={"واحد فروش و اجاره"} />
                </div>
                <Image src={LogoImg} alt={"Logo"} className="w-[90px]" />
                <div className="w-full flex justify-between hidden lg:flex">
                    <HeaderItem text={"اخبار"} />
                    <HeaderItem text={"خدمات"} />
                    <HeaderItem text={"تماس با ما"} />
                    <HeaderItem text={"درباره ما"} />
                </div>
            </div>
            
        </div>
    )
}

export default Header