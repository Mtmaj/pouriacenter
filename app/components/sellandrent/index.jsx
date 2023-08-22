import Filters from "./filters/index"
import {FliterCategoryResponsive} from "./filters/index"
import SearchIcon from "@/public/icons/search.svg"
import Image from "next/image"
import Link from "next/link"
import {SellItem} from "../home/sell"


const Search = ()=>{
    return (
        
        <div className="md:w-[90%] w-full shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] flex flex-row bg-[#FAFAFA] rounded-[10px] md:pr-[20px] pr-[10px] transition-all duration-500 focus-within:border-orange border border-[rgba(0,0,0,0)]">
            <input type="text" className="text-[15px] !outline-none bg-[rgba(0,0,0,0)] w-full group" placeholder="جست و جو در آگهی های رهن و اجاره ..."/>
            <div className="h-[40px] w-[45px] bg-orange flex items-center justify-center rounded-[10px] ">
                <Image src={SearchIcon} alt="جست و جو"  />
            </div>
        </div>
        
    )
}

const Main = ()=>{
    return (
        <div className="flex flex-row w-full md:px-[90px] px-[30px] py-[20px] gap-x-[20px]">
            <div className="min-w-[330px] hidden md:block">
                <Filters />
            </div>
            
            <div className="flex flex-col w-full items-center gap-y-[20px]">
                <Search />
                <div className="md:w-[90%] w-full flex flex-row rounded-full shadow lg:shadow-none py-[5px] lg:p-0 gap-x-[7px]">
                    <Link href={"/"} className="lg:mr-[5px] mr-[5px] rounded-full text-[14px] px-[14px] py-[5px] bg-[#E7E7E7]">#اجاره</Link>
                    <Link href={"/"} className="rounded-full text-[14px] px-[14px] py-[5px] bg-[#E7E7E7]">#اجاره</Link>
                </div>
                <div className="w-full md:hidden">
                <FliterCategoryResponsive />
            </div>
                <div className="md:w-[90%] w-full grid lg:grid-cols-2 gap-y-[20px] grid-cols-1 gap-x-[50px]">
                    <SellItem />
                    <SellItem />
                </div>
            </div>
            

        </div>
    )
}

export default Main