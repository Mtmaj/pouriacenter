import { useEffect } from "react"

const Title = (props)=>{
    useEffect(()=>{
        opacityanim(4000,"widthanimstart",[props.idname+'line1',props.idname+'line2'])
        opacityanim(4000,"opacityanimstart",[props.idname])
    })
    async function opacityanim(delay,animation,listclass){
        const observer = new IntersectionObserver(entries => {
        // Loop over the entries
            entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add(animation);
            }
            });
        });
        await new Promise(r => setTimeout(r, delay));
        listclass.forEach((item)=>{
            observer.observe(document.querySelector("#"+item))
        })
        
    }
    return (
        <div className="w-full lg:px-[140px] md:px-[60px] px-[30px] flex flex-row gap-x-[16px] items-center pb-[20px]">
            <div className="w-full flex justify-end md:flex hidden">
                <div id={(props.idname)+"line1"} className="w-[0] line1 rounded h-[1px] bg-[#D9D9D9] rouded-full"></div>
            </div>
            <span id={props.idname} className="opacity-[0] text-orange md:text-[20px] text-[17px] font-extrabold whitespace-nowrap">{props.text}</span>
            <div className="w-full flex justify-start">
                <div id={props.idname+"line2"} className="w-[0] rounded h-[1px] bg-[#D9D9D9] rouded-full"></div>
            </div>
        </div>
    )
}

export default Title