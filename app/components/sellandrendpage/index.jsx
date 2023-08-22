import Link from "next/link";
import { useEffect } from "react"
import {BsCheck2Square} from "react-icons/bs"

const MainSellAndRentPage = ()=>{
    useEffect(()=>{
        const slider = document.querySelector('.slider');
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
        mouseDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        };
        let stopDragging = function (event) {
        mouseDown = false;
        };
        slider.addEventListener('mousedown', startDragging, false);
        slider.addEventListener('mouseup', stopDragging, false);
        slider.addEventListener('mouseleave', stopDragging, false);
    })
    return (
        <div className="w-full gap-x-[20px] md:px-[100px] px-[20px] gap-y-[20px] flex lg:flex-row flex-col mx-auto lg:items-start items-center pb-[40px]">
            <div className="min-w-[350px] md:w-[350px] w-full flex flex-col">
                <img src="https://s8.uupload.ir/files/group_104_er51.png" className="border p-1 rounded border-yellow h-[400px] object-cover" />
                <div className="h-[10px]"></div>
                <div className="w-full slider cursor-pointer h-[60px] overflow-x-scroll  flex mt-[5px] gap-x-[10px] no-scrollbar">
                    <div className="min-w-[60px] w-[60px] h-[60px]">
                        <img src="https://s8.uupload.ir/files/group_104_er51.png" className="border p-1 rounded border-yellow h-[60px] object-cover" />
                    </div>
                    <div className="min-w-[50px] w-[60px] h-[60px]">
                        <img src="https://s8.uupload.ir/files/group_104_er51.png" className=" p-1 rounded h-[60px] object-cover" />
                    </div>
                </div>
                <div className="h-[20px]"></div>
                <div className="w-full border lg:flex hidden shadow border-[#A7A7A7] gap-y-[10px] rounded px-[20px] pb-[20px] py-[10px] flex flex-col items-start">
                    <span className="font-bold text-[18px]">تگ ها</span>
                    <div className="flex flex-wrap gap-x-[8px] gap-y-[14px] w-full">
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] shadow drop-shadow-xl" >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] shadow drop-shadow-xl" >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] shadow drop-shadow-xl" >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] shadow drop-shadow-xl" >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] shadow drop-shadow-xl" >#اجاره‌ای</Link>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-y-[20px] flex-col lg:items-start md:items-center">
                <span className="text-[20px] font-bold">لورم ایپسوم</span>
                <div className="flex flex-row gap-x-[10px] md:text-[17px] text-[14px] items-center">
                    <BsCheck2Square className="text-green text-[25px]" />
                    <p className="font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                </div>
                <div className="flex flex-row gap-x-[10px] md:text-[17px] text-[14px] items-center">
                    <BsCheck2Square className="text-green text-[25px]" />
                    <p className="font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                </div>
                <div className="flex flex-row gap-x-[10px] md:text-[17px] text-[14px] items-center">
                    <BsCheck2Square className="text-green text-[25px]" />
                    <p className="font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                </div>
                <div className="flex flex-row gap-x-[10px] md:text-[17px] text-[14px] items-center">
                    <BsCheck2Square className="text-green text-[25px]" />
                    <p className="font-semibold">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                </div>
                <div className="flex flex-col items-start gap-y-[10px] mt-[20px]">
                    <span className="font-bold text-[18px] flex md:justify-start gap-x-[10px] justify-between w-full">قیمت رهن : <span className="text-green">50,000,000 تومن</span></span>
                    <span className="font-bold text-[18px] flex md:justify-start gap-x-[10px] justify-between w-full">قیمت اجاره : <span className="text-green">50,000,000 تومن</span></span>
                </div>
                <span className="font-extrabold text-[15px] flex items-center gap-x-[15px] flex md:justify-start gap-x-[10px] justify-between w-full">جهت اطلاعات بیشتر تماس بگیرید : <span className="bg-orange text-white rounded text-[15px] px-[10px] py-[2px] pt-[5px]">0912xxx1234</span></span>
                <div className="w-full border lg:hidden  border-[#A7A7A7] gap-y-[10px] rounded px-[20px] pb-[20px] py-[10px] flex flex-col items-start">
                    <span className="font-bold text-[18px]">تگ ها</span>
                    <div className="flex flex-wrap gap-x-[8px] gap-y-[14px] w-full">
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                        <Link href={"/"} className="bg-[#D9D9D9] text-[15px] font-semibold rounded-full px-[15px] py-[5px] " >#اجاره‌ای</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSellAndRentPage