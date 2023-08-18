import Link from "next/link"

const LinkItme = (props)=>{
    return (
        <div className="flex flex-row gap-x-[10px] items-center">
            <div className="w-[5px] h-[5px] bg-black rounded-full opacity-[0.5] mb-[-3px]"></div>
            <Link href={"/"} className="text-[16px] font-Regular ">{props.text}</Link>
        </div>
    )
}

const Footer = ()=>{
    return (
        <div className="w-full flex flex-col px-[100px] gap-y-[10px] h-fit">
            <div className="w-full bg-black h-[1px] rounded"></div>
            <div className="w-full flex flex-row px-[10px] py-[10px] h-fit ">
                <div className="w-[90%] flex flex-col items-start mx-aut gap-y-[20px]">
                    <span className="font-bold">صفحات اصلی</span>
                    <div className="pr-[10px] flex flex-col gap-y-[10px]">
                        <LinkItme text={"واحد های تجاری"} />
                        <LinkItme text={"بخش فروش و اجاره"} />
                        <LinkItme text={"برند ها"} />
                        <LinkItme text={"اخبار"} />
                        <LinkItme text={"خدمات"} />
                    </div>
                </div>
                <div className="w-[1px] h-[100svh] bg-black"></div>
                <div className="w-[90%] flex flex-col mx-auto"></div>
                <div className="w-[90%] flex flex-col mx-auto"></div>
            </div>
        </div>
    )
}

export default Footer