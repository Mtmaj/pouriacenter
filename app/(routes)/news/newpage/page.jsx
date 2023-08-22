import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import NewsIcon from "@/public/icons/Newspaper.svg"
import Image from "next/image"
import MainNewsPage from "@/app/components/newspage/index"

const News = ()=>{
    return (
        <>
            <Header/>
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <div className="w-full flex flex-row justify-between items-center md:pl-[100px] pl-[20px]">
                <PageTitle items={["اخبار","لورم ایپسوم"]} />
            </div>
            <MainNewsPage />
        </>
    )
}

export default News