"use client"
import ContactUsAdmin from "./contactus/index"
import AboutUsAdmin from "./aboutus/index"
import ShopsMainAdmin from "./shops/index"
import ShopsAddAdmin from "./shops/add"
import SellMainAdmin from "./sell/index"
import SellAddAdmin from "./sell/add"
import RentMainAdmin from "./rent/index"
import RentAddAdmin from "./rent/add"
import MessageMainAdmin from "./messages/index"
import NewsMainAdmin from "./news/index"
import NewsAddAdmin from "./news/add"
import { useState } from "react"

const AdminMain = ()=>{
    const list_page = [AboutUsAdmin,ContactUsAdmin,ShopsMainAdmin,ShopsAddAdmin,SellMainAdmin,SellAddAdmin,RentMainAdmin,RentAddAdmin,MessageMainAdmin,NewsMainAdmin,NewsAddAdmin]
    const [data_set,set_data_set] = useState(null)
    const [select_page,set_select_page] = useState(0)
    function PageHandle(props){
        console.log(select_page)
        return (
            <>
            {list_page[select_page]({set_select_page:props.set_select_page,set_data_set,data_set})}
            </>
        )
    }
    return (
        <div className="w-full flex flex-row h-full">
            <div className="lg:min-w-fit lg:w-fit w-full lg:flex hidden absolute h-full gap-y-[20px] lg:static text-white w-fit bg-green px-[30px] py-[40px] flex-col items-center">
                <span className="text-center w-full">ادمین پوریاسنتر</span>
                <div className="flex flex-col gap-y-[30px] items-center">
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(1)}} >تماس با ما</span>
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(0)}}>درباره ما</span>
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(2)}}>برند ها و واحد های تجاری</span>
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(4)}}>واحد های فروش</span>
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(6)}}>واحد های رهن و اجاره</span>
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(8)}}>پیغام ها</span>
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(9)}}>اخبار</span>
                    <span className="border-b-[1px] w-fit" onClick={()=>{set_select_page(0)}}>بستن</span>
                </div>
            </div>
            <PageHandle set_select_page={set_select_page} />
        </div>
    )
}

export default AdminMain