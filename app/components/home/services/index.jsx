import Image from "next/image";
import ParkingImage from "@/public/icons/parking.svg";
import CarwashImage from "@/public/icons/carwash.svg";
import {useEffect} from "react"
const Services = ()=>{
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
        <div className="flex flex-row items-end md:px-[150px] pb-[40px] px-[20px] services opacity-[0] ">
            <div className="w-full flex items-center justify-center">
                <div className="flex flex-col gap-y-[20px] items-center opacity-[0.7] hover:opacity-[1] transition-all duration-500">
                    <div className="md:h-[150px] h-[100px] md:w-[150px] w-[100px] flex  items-end">
                        <div className="md:w-[150px] w-[100px] h-[0px] overflow-hidden flex items-start transition-all duration-1000 itemservices">
                            <div className="md:h-[150px] h-[100px] md:w-[150px] w-[100px]">
                                <Image src={CarwashImage} alt="کارواش" />
                            </div> 
                        </div>
                    </div>
                    <span className="font-extrabold">کارواش</span>
                </div>
            </div>
            <div className="w-full flex items-center justify-center opacity-[0.7] hover:opacity-[1] transition-all duration-500">
                <div className="flex flex-col gap-y-[20px] items-center ">
                    <div className="md:h-[150px] h-[100px] md:w-[150px] w-[100px] flex items-end">
                        <div className="md:w-[150px] w-[100px] h-[0px] overflow-hidden flex items-start transition-all duration-1000 itemservices">
                            <div className="md:h-[150px] h-[100px] md:w-[150px] w-[100px]">
                                <Image src={ParkingImage} alt="پارکینگ" />
                            </div>
                        </div>
                    </div>
                    <span className="font-extrabold">پارکینگ عمومی</span>
                </div>
            </div>
        </div>
    )
}

export default Services