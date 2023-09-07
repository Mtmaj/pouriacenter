import Link from "next/link"
import {IoLogoInstagram} from "react-icons/io"
import {IoLogoWhatsapp} from "react-icons/io5"
const LinkItme = (props)=>{
    return (
        <div className="flex flex-row gap-x-[10px] items-center">
            <div className="min-w-[5px] max-h-[5px] h-[5px] bg-black rounded-full opacity-[0.5] mb-[-3px]"></div>
            <Link href={"/"} className="text-[16px] font-Regular ">{props.text}</Link>
        </div>
    )
}

const Footer = ()=>{
    return (
        <div className="w-full flex flex-col md:px-[100px] px-[20px] gap-y-[10px] h-fit mt-[40px]">
            <div className="w-full bg-black h-[1px] rounded"></div>
            <div className="w-full flex lg:flex-row flex-col px-[10px] py-[10px] h-fit ">
                <div className="w-[90%] lg:border-l-[1px]  flex flex-col items-start px-[10px] gap-y-[20px]">
                    <span className="font-bold">صفحات اصلی</span>
                    <div className="pr-[10px] flex flex-col gap-y-[10px]">
                        <LinkItme text={"واحد های تجاری"} />
                        <LinkItme text={"بخش فروش و اجاره"} />
                        <LinkItme text={"برند ها"} />
                        <LinkItme text={"اخبار"} />
                        <LinkItme text={"خدمات"} />
                    </div>
                </div>
                <div className="w-[90%] lg:border-l-[1px]  flex flex-col items-start px-[10px] gap-y-[20px]">
                    <span className="font-bold">راه های ارتباطی با ما</span>
                    <div className="pr-[10px] flex flex-col gap-y-[10px]">
                        <LinkItme text={"شماره تماس 1 : 09120001234"} />
                        <LinkItme text={"شماره تماس 2 : 09120001234"} />
                        <LinkItme text={"آدرس : تهران،خیابان قزوین، خیابان امین الملک (امامزاده حسن)، خیابان سجاد شمالی، پلاک نبش"} />
                        <p className="font-semibold flex items-center gap-x-[5px]">شبکه های اجتماعی : <IoLogoInstagram className="text-black text-[30px]"/> <IoLogoWhatsapp className="text-[27px] text-black"/></p>
                    </div>
                </div>
                <div className="w-[90%]   flex flex-col items-start px-[10px] gap-y-[20px]">
                    <span className="font-bold">صفحات اصلی</span>
                    <div className="pr-[10px] flex flex-col gap-y-[10px]">
                        <LinkItme text={"واحد های تجاری"} />
                        <LinkItme text={"بخش فروش و اجاره"} />
                        <LinkItme text={"برند ها"} />
                        <LinkItme text={"اخبار"} />
                        <LinkItme text={"خدمات"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer