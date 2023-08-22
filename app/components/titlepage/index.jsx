import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import Link from "next/link"

const PageTitle = (props)=>{
    return (
        <div className="w-full items-center md:px-[100px] px-[20px] justify-start flex flex-row md:gap-x-[20px] gap-x-[10px] md:text-[15px] text-[13px] font-bold">
            <Link href={"/"}>صفحه اصلی</Link>
            {props.items.map((item,index)=>{
                return <>
                <IoIosArrowBack />
                <Link href={"/"} className={index==(props.items.length -1)?"text-orange":""}>{item}</Link>
                </>
            })}
        </div>
    )
}

export default PageTitle