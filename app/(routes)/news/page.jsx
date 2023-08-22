import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import NewsIcon from "@/public/icons/Newspaper.svg"
import Image from "next/image"
import NewsMain from "@/app/components/news/index"

const News = ()=>{
    return (
        <>
            <Header/>
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <div className="w-full flex flex-row justify-between items-center md:pl-[100px] pl-[20px]">
                <PageTitle items={["اخبار"]} />
                <span className="bg-orange text-white px-[30px] cursor-pointer py-[4px] text-[15px] rounded whitespace-nowrap flex flex-row items-center gap-x-[8px]">اخبار داخلی <Image className="mb-[4px]" alt="اخبار" src={NewsIcon} /></span>
            </div>
            <NewsMain />
        </>
    )
}

export default News