import { useEffect } from "react"
import {BiHome} from "react-icons/bi"
const Title = (props)=>{
    // useEffect(()=>{
    //     opacityanim(4000,"widthanimstart",[props.idname+'line1',props.idname+'line2'])
    //     opacityanim(4000,"opacityanimstart",[props.idname])
    // })
    // async function opacityanim(delay,animation,listclass){
    //     const observer = new IntersectionObserver(entries => {
    //     // Loop over the entries
    //         entries.forEach(entry => {
    //         // If the element is visible
    //         if (entry.isIntersecting) {
    //             // Add the animation class
    //             entry.target.classList.add(animation);
    //         }
    //         });
    //     });
    //     await new Promise(r => setTimeout(r, delay));
    //     listclass.forEach((item)=>{
    //         observer.observe(document.querySelector("#"+item))
    //     })
        
    // }
    return (
        <div className="mx-auto w-fit items-center flex-col flex gap-y-[5px]">
            <span id={props.idname} className="flex flex-row items-center gap-x-[5px] text-bold md:text-[18px] font-bold text-[15px] whitespace-nowrap">{props.icon} {props.text}</span>
            <div className="w-[130%] flex flex-col items-center gap-y-[4px]">
                <div className="w-full bg-green h-[2px] rounded"></div>
                <div className="w-[70%] bg-green opacity-[0.5] rounded h-[2px]"></div>
            </div>
            <div className="h-[50px]"></div>
        </div>
    )
}

export default Title