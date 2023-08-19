import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
import Link from "next/link"

const PageTitle = (props)=>{
    return (
        <div className="w-full items-center px-[100px] justify-start flex flex-row gap-x-[20px] text-[15px] font-bold">
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