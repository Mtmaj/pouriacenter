import Image from "next/image"
import TaioringImg from "@/public/images/tailoring.svg"
import SmookingImg from "@/public/images/smooking.svg"
import ParerImg from "@/public/images/prayer.svg"
import {IoLogoInstagram} from "react-icons/io"
import {IoLogoWhatsapp} from "react-icons/io5"
const MainServices = ()=>{
    return (
        <div className="w-full flex flex-col gap-y-[20px] mt-[20px] md:px-[100px] px-[20px]">
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-[10px] gap-y-[20px]">
                <div className="flex justify-center gap-y-[10px] lg:w-[400px] w-full flex-col items-start md:order-1 order-last">
                    <span className="font-extrabold text-[18px] flex items-center gap-x-[15px]">خیاطی مظاهری<span className="bg-orange text-white rounded text-[16px] px-[10px] py-[3px]">0912xxx1234</span></span>
                    <p className="font-regular">خیاطی زیپ زاپ با ارائه انواع خدمات طراحی، دوخت و تعمیرات البسه آقایان و بانوان</p>
                    <p className="font-semibold">آدرس :  طبقه همکف ، راهروی راست ، پلاک A39</p>
                    <p className="font-semibold flex items-center gap-x-[5px]">شبکه های اجتماعی : <IoLogoInstagram className="text-[30px]"/> <IoLogoWhatsapp className="text-[27px]"/></p>
                </div>
                <div className="w-full bg-[#D9D9D9] rounded py-[40px] flex justify-center md:order-last order-1">
                    <Image src={TaioringImg} alt="چرخ خیاطی" />
                </div>
            </div>
            <div className="w-full md:hidden bg-black h-[1px] opacity-[0.2]"></div>
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-y-[20px] gap-x-[20px]">
                <div className="flex justify-center gap-y-[10px] lg:w-[400px] w-full flex-col items-start order-last">
                    <span className="font-extrabold text-[18px] flex items-center gap-x-[15px]">اتاق سیگار</span>
                    <p className="font-regular">اتاق سیگار و سیگار الکترونیکی</p>
                    <p className="font-semibold">آدرس : پارکینگ اول</p>
                </div>
                <div className="w-full bg-[#D9D9D9] rounded py-[40px] flex justify-center">
                    <Image src={SmookingImg} alt="اتاق سیگار" />
                </div>
            </div>
            <div className="w-full md:hidden bg-black h-[1px] opacity-[0.2]"></div>
            <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-[10px] gap-y-[20px]">
                <div className="flex justify-center gap-y-[10px] lg:w-[400px] w-full flex-col items-start md:order-1 order-last">
                    <span className="font-extrabold text-[18px] flex items-center gap-x-[15px]">نمازخانه</span>
                    <p className="font-semibold">آدرس : پارکینگ اول</p>
                </div>
                <div className="w-full bg-[#D9D9D9] rounded py-[40px] flex justify-center order-1 md:order-last">
                    <Image src={ParerImg} alt="نمازخانه" />
                </div>
            </div>
        </div>
    )
}

export default MainServices