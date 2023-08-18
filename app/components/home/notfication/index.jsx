import {IoNotificationsOutline} from "react-icons/io5"
import CloseIcon from "@/public/icons/close.svg"
import Image from "next/image"
import { useEffect } from "react"

const Notfication = ()=>{
    useEffect(()=>{
        opacityanim(1000)
    })
    async function opacityanim(delay){
        const observer = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('widthanimstart');
            }
            });
        });
        await new Promise(r => setTimeout(r, delay));
        observer.observe(document.querySelector(".notification"))
    }
    return (
        <div className=" lg:px-[140px] md:px-[60px] px-[20px] py-[40px]">
            <div className="notification opacity-0 w-[0] overflow-hidden drop-shadow rounded-[10px] items-center md:px-[10px] px-[5px] md:py-[10px] py-[8px] flex flex-row justify-between bg-[#E9E9E9] border-black">
                <div className="md:gap-x-[10px] gap-x-[5px] flex flex-row items-center">
                    <IoNotificationsOutline className="md:text-[26px] text-[22px]" />
                    <span className="font-bold md:text-[14px] text-[12px] whitespace-nowrap">این بخش برای افزودن اعلان و رویداد جدید است</span>
                </div>
                <Image src={CloseIcon} alt="بستن اعلان ها" className="md:w-[25px] w-[21px]" />
            </div>
        </div>
    )
}

export default Notfication