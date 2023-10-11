"use client"

import { IoTv } from "react-icons/io5"
import { RiArrowDropDownLine } from "react-icons/ri"
import { useState } from "react"
var start_price = null
var end_price = null
var start_meterage = null
var end_meterage = null
var start_rent_price = null
var start_mortgage_price = null
var end_rent_price = null
var end_mortgage_price = null
const CategoryButton = (props)=>{
    return (
        <div className="flex w-full flex-col md:w-fit items-center gap-y-[2px] group cursor-pointer" onClick={()=>{props.set_update_tags(null);props.set_is_sell(props.is_sell);props.set_data(null)}}>
            <span className={(props.isSelect ==true?"text-orange":"text-[#7E7E7E]")+" text-[16px] font-bold w-fit group-hover:text-orange transition-all duration-500"}>{props.text}</span>
            <div className="flex flex-row w-full gap-x-[2px]">
                <div className="w-[3px] h-[3px] flex -tems-center justify-center bg-[#7E7E7E] rounded-full">
                    <div className={(props.isSelect==true?"w-[3px] h-[3px]":"w-[0] h-[0]") + " w-[0] h-[0] bg-orange group-hover:h-[3px] group-hover:w-[3px] transition-all duration-500"}></div>
                </div>
                <div className="md:w-[80%] w-full h-[3px] flex justify-start rounded-full bg-[#7E7E7E]">
                    <div className={(props.isSelect==true?"w-full":"w-0")+" h-[3px] bg-orange group-hover:w-full transition-all duration-500"}></div>
                </div>
            </div>
        </div>
    )
}

const Rent = (props)=>{
    
    function handleRentPrice(){
        if(start_rent_price == ""){
            start_rent_price= null
        }
        if(end_rent_price == ""){
            end_rent_price=null
        }
        props.filters.set_rent_price_filter({"start" : start_rent_price,"end" : end_rent_price})
        props.filters.set_data(null)
    }
    function handleMortgagePrice(){
        if(start_mortgage_price == ""){
            start_mortgage_price= null
        }
        if(end_mortgage_price == ""){
            end_mortgage_price=null
        }
        props.filters.set_rent_price_filter({"start" : start_mortgage_price,"end" : end_mortgage_price})
        props.filters.set_data(null)
    }
    function handleMeterage(){
        if(start_meterage == ""){
            start_meterage = null
        }
        if(end_meterage == ""){
            end_meterage = null
        }
        props.filters.set_meterage_filter({"start":start_meterage,"end":end_meterage})
        props.filters.set_data(null)
    }
    return (
        <div className="flex w-full flex-col gap-y-[15px]">
            <div className="w-full flex flex-col border-[0.5px] border-[#989797] rounded-[15px] p-[17px] gap-y-[30px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">قیمت اجاره</span>
                </div>
                <div className="w-full flex flex-col gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input value={start_rent_price} onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){start_rent_price = e.currentTarget.value;handleRentPrice()}}} type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input value={end_rent_price} onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){end_rent_price = e.currentTarget.value;handleRentPrice()}}} type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col border-[0.5px] border-[#989797] rounded-[15px] p-[17px] gap-y-[30px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">قیمت رهن</span>
                </div>
                <div className="w-full flex flex-col gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input value={start_mortgage_price} onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){start_mortgage_price = e.currentTarget.value;handleMortgagePrice()}}} type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input value={end_mortgage_price} onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){end_mortgage_price = e.currentTarget.value;handleMortgagePrice()}}} type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col border-[0.5px] border-[#989797] rounded-[15px] p-[17px] gap-y-[20px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">متراژ</span>
                </div>
                <div className="w-full flex flex-row gap-x-[10px] gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){start_meterage = e.currentTarget.value;handleMeterage()}}} value={start_meterage} type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){end_meterage = e.currentTarget.value;handleMeterage()}}} value={end_meterage} type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col border-[0.5px] border-[#989797] rounded-[15px] p-[17px] gap-y-[10px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">مرتب سازی بر اساس قیمت</span>
                </div>
                <div className="w-full flex flex-col gap-x-[10px] gap-y-[8px]">
                    <span onClick={()=>{props.filters.set_sort_method(1);props.filters.set_data(null)}} className={"font-semibold text-[15px] hover:text-orange transition-all cursor-pointer " + (props.filters.sort_method == 1?"text-orange" : "")}>کم به زیاد</span>
                    <span onClick={()=>{props.filters.set_sort_method(-1);props.filters.set_data(null)}} className={"font-semibold text-[15px] hover:text-orange transition-all cursor-pointer " + (props.filters.sort_method == -1?"text-orange" : "")}>زیاد به کم</span>
                    <span onClick={()=>{props.filters.set_sort_method(null);props.filters.set_data(null)}} className={"font-semibold text-[15px] hover:text-orange transition-all cursor-pointer " + (props.filters.sort_method == null?"text-orange" : "")}>بدون مرتب سازی</span>
                </div>
            </div>
        </div>
    )
}

const Sell = (props)=>{
    
    function handlePrice(){
        if(start_price == ""){
            start_price= null
        }
        if(end_price == ""){
            end_price=null
        }
        props.filters.set_price_filter({"start" : start_price,"end" : end_price})
        props.filters.set_data(null)
    }
    function handleMeterage(){
        if(start_meterage == ""){
            start_meterage = null
        }
        if(end_meterage == ""){
            end_meterage = null
        }
        props.filters.set_meterage_filter({"start":start_meterage,"end":end_meterage})
        props.filters.set_data(null)
    }
    return (
        <div className="flex w-full flex-col gap-y-[15px]">
            <div className="w-full flex flex-col border-[0.5px] border-[#989797] rounded-[15px] p-[17px] gap-y-[30px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">قیمت خرید</span>
                </div>
                <div className="w-full flex flex-col gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){start_price  = e.currentTarget.value;handlePrice()}}} value={start_price} type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                        <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){end_price = e.currentTarget.value;handlePrice()}}} value={end_price} type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col border-[0.5px] border-[#989797] rounded-[15px] p-[17px] gap-y-[20px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">متراژ</span>
                </div>
                <div className="w-full flex flex-row gap-x-[10px] gap-y-[10px]">
                    <div className="flex w-full relative justify-end">
                        <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){start_meterage = e.currentTarget.value;handleMeterage()}}} value={start_meterage} type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                    <div className="flex w-full relative justify-end">
                        <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){end_meterage = e.currentTarget.value;handleMeterage()}}} value={end_meterage} type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[16px] py-[5px] px-[10px]" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col border-[0.5px] border-[#989797] rounded-[15px] p-[17px] gap-y-[10px]">
                <div className="w-full flex flex-row items-center justify-between">
                    <span className="font-bold text-[16px]">مرتب سازی بر اساس قیمت</span>
                </div>
                <div className="w-full flex flex-col gap-x-[10px] gap-y-[8px]">
                    <span onClick={()=>{props.filters.set_sort_method(1);props.filters.set_data(null)}} className={"font-semibold text-[15px] hover:text-orange transition-all cursor-pointer " + (props.filters.sort_method == 1?"text-orange" : "")}>کم به زیاد</span>
                    <span onClick={()=>{props.filters.set_sort_method(-1);props.filters.set_data(null)}} className={"font-semibold text-[15px] hover:text-orange transition-all cursor-pointer " + (props.filters.sort_method == -1?"text-orange" : "")}>زیاد به کم</span>
                    <span onClick={()=>{props.filters.set_sort_method(null);props.filters.set_data(null)}} className={"font-semibold text-[15px] hover:text-orange transition-all cursor-pointer " + (props.filters.sort_method == null?"text-orange" : "")}>بدون مرتب سازی</span>
                </div>
            </div>
        </div>
    )
}

const FilterCtaegory = (props)=>{

    return (
        <div className="w-[300px] flex flex-col items-start  gap-y-[30px]">
            <div className="flex flex-row gap-x-[20px] mr-[15px]">
                <CategoryButton set_update_tags={props.set_update_tags} text={"فروش"} isSelect={props.is_sell} set_data={props.set_data} set_is_sell={props.set_is_sell} is_sell={true} />
                <CategoryButton set_update_tags={props.set_update_tags} text={"اجاره"} set_data={props.set_data} isSelect={!props.is_sell} set_is_sell={props.set_is_sell} is_sell={false} />
            </div>
            {props.is_sell?<Sell filters={props}/> : <Rent filters={props} />}
        </div>
    )
}

const RentFilterPanel = (props)=>{
    const [start,set_start] = useState(null)
    const [end,set_end] = useState(null)
    function handleSet(){
        if(start == ""){
            set_start(null)
        }
        if(end == ""){
            set_end(null)
        }
        props.set_filter({start,end})
        props.set_data(null)
        props.set_status("invisivle opacity-[0]")
    }
    return (
        <div className={`absolute border transition-all duration-500 rounded-[5px] mt-[10px] bg-white py-[10px] z-[5] px-[10px] w-full flex flex-col items-center ${props.status}`}>
            <span className="font-bold text-[14px]">رنج قیمت {props.title}</span>
            <div className="w-full flex flex-row gap-x-[5px] gap-y-[10px] mt-[10px] text-[12px]">
                <div className="flex w-full relative justify-end">
                    <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                    <input value={start} onChange={(e)=>{if(/^[0-9]*$/.test(e.currentTarget.value) == true){set_start(e.currentTarget.value)}}} type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[12px] py-[5px] px-[5px]" />
                </div>
                <div className="flex w-full relative justify-end">
                    <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">تومان</span>
                    <input value={end} onChange={(e)=>{if(/^[0-9]*$/.test(e.currentTarget.value) == true){set_end(e.currentTarget.value)}}} type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[12px] py-[5px] px-[5px]" />
                </div>
            </div>
            <div className="grid grid-cols-2 w-full mt-[10px]">
                <div className="flex flex-wrap gap-x-[5px] gap-y-[5px]"> 
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>10000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>15000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>20000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>25000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>30000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>40000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>50000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>100000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>200000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>500000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_start(e.currentTarget.innerHTML)}}>1000000000</span>
                </div>
                <div className="flex flex-wrap gap-x-[5px] gap-y-[5px]">
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>10000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>15000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>20000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>25000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>30000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>40000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>50000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>100000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>200000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>500000000</span>
                    <span className="border text-[10px] px-[5px] rounded" onClick={(e)=>{set_end(e.currentTarget.innerHTML)}}>1000000000</span>
                </div>
            </div>
            <div className="w-full mt-[20px] grid grid-cols-2 gap-x-[5px]">
                <span className="bg-orange w-full text-center text-white text-[13px] font-bold py-[5px] rounded" onClick={handleSet}>اعمال فیلتر</span>
                <span className="w-full border text-center text-[13px] font-bold py-[5px] rounded" onClick={()=>{props.set_filter({});props.set_data(null);set_end(null);set_start(null);props.set_status("invisivle opacity-[0]")}}>حذف فیلتر</span>
            </div>
        </div>
    )
}
const MeterageFilterPanel = (props)=>{
    const [update,set_update] = useState(0)
    function handleMeterage(){
        if(start_meterage == ""){
            start_meterage = null
        }
        if(end_meterage == ""){
            end_meterage = null
        }
        props.filters.set_meterage_filter({"start":start_meterage,"end":end_meterage})
        props.filters.set_data(null)
        props.set_status("invisivle opacity-[0]")
    }
    return (
        <div className={`absolute border transition-all duration-500 rounded-[5px] mt-[10px] bg-white py-[10px] z-[5] px-[10px] w-full flex flex-col items-center ${props.status}`}>
            <span className="font-bold text-[14px]">متراژ</span>
            <div className="w-full flex flex-row gap-x-[5px] gap-y-[10px] mt-[10px] text-[12px]">
                <div className="flex w-full relative justify-end">
                    <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">متر</span>
                    <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){start_meterage = e.currentTarget.value;set_update(update+1)}}} value={start_meterage} type="text" placeholder=" از" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[12px] py-[5px] px-[5px]" />
                </div>
                <div className="flex w-full relative justify-end">
                    <span className="absolute text-end flex items-center h-full justify-end pl-[10px] text-[rgb(161,168,179)]">متر</span>
                    <input onChange={(e)=>{if((/^[0-9]*$/.test(e.currentTarget.value) == true)){end_meterage = e.currentTarget.value;set_update(update+1)}}} value={end_meterage} type="text" placeholder=" تا" className="w-full bg-[#e7e7e7] focus:border-orange duration-500 transition-all border border-[rgba(0,0,0,0)]  !outline-none  text-black rounded text-[12px] py-[5px] px-[5px]" />
                </div>
            </div>
            <div className="w-full mt-[20px] grid grid-cols-2 gap-x-[5px]">
                <span className="bg-orange w-full text-center text-white text-[13px] font-bold py-[5px] rounded" onClick={handleMeterage}>اعمال فیلتر</span>
                <span className="w-full border text-center text-[13px] font-bold py-[5px] rounded" onClick={()=>{start_meterage = "";end_meterage = "";props.filters.set_meterage_filter({});props.filters.set_data(null);props.set_status("invisivle opacity-[0]")}}>حذف فیلتر</span>
            </div>
        </div>
    )
}

const RentFilterResponsive = (props)=>{
    console.log(props)
    const [filter_panel_status,set_filter_panel_status] = useState("invisible opacity-[0]")
    const [filter_panel_text,set_filter_panel_text] = useState("")
    const [filter_index,set_filter_index] = useState(0)
    const [meterage_status,set_meterage_status] = useState("invisible opacity-[0]")
    const [sort_status,set_sort_status] = useState("invisible opacity-[0]")
    return (
        <div className="relative w-full">
            <div className="w-full flex flex-row gap-x-[10px]">
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap cursor-pointer" onClick={()=>{set_filter_index(0);set_sort_status("invisible opacity-[0]");set_meterage_status("invisible opacity-[0]");set_filter_panel_text("اجاره");set_filter_panel_status("visivle opacity-[1]")}}>اجاره</span>
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap cursor-pointer" onClick={()=>{set_filter_index(1);set_sort_status("invisible opacity-[0]");set_meterage_status("invisible opacity-[0]");set_filter_panel_text("رهن");set_filter_panel_status("visivle opacity-[1]")}}>قیمت رهن</span>
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap cursor-pointer" onClick={()=>{set_sort_status("invisible opacity-[0]");set_filter_panel_status("invisible opacity-[0]");set_meterage_status("visible opacity-[1]")}}>متراژ</span>
                <div className="w-full relative">
                    <div onClick={()=>{set_sort_status("visible opacity-[1]");set_filter_panel_status("invisible opacity-[0]");set_meterage_status("invisible opacity-[0]")}} className="cursor-pointer border border-orange w-full rounded bg-orange flex justify-center text-white px-[10px] py-[4px] whitespace-nowrap">
                        <div className="w-full"></div>
                        <span >مرتب سازی</span>
                        <div className="w-full flex justify-end">
                            <div className="flex flex-col text-[18px]">
                                <RiArrowDropDownLine className="rotate-180 mb-[-10px] mt-[-2px]"/>
                                <RiArrowDropDownLine />
                            </div>
                        </div>
                    </div>
                    <div className={`${sort_status} absolute transition-all duration-500 mt-[5px] gap-y-[10px] rounded-[5px] z-[2] bg-white flex flex-col w-full items-center border-[1px] border-orange py-[5px]`}>
                        <span className={"cursor-pointer " + (props.filters.sort_method == 1?"text-green":"")} onClick={()=>{props.filters.set_sort_method(1);props.filters.set_data(null);set_sort_status("invisible opacity-[0]")}}>کم به زیاد</span>
                        <span className={"cursor-pointer " + (props.filters.sort_method == -1?"text-green":"")} onClick={()=>{props.filters.set_sort_method(-1);props.filters.set_data(null);set_sort_status("invisible opacity-[0]")}}>زیاد به کم</span>
                        <span className={"cursor-pointer " + (props.filters.sort_method == null?"text-green":"")} onClick={()=>{props.filters.set_sort_method(null);props.filters.set_data(null);set_sort_status("invisible opacity-[0]")}}>بدون دسته بندی</span>
                    </div>
                </div>
            </div>
            <RentFilterPanel set_data={props.filters.set_data} set_filter={filter_index == 0?props.filters.set_rent_price_filter:props.filters.set_mortgage_price_filter} title={filter_panel_text} status={filter_panel_status} set_status={set_filter_panel_status} />
            <MeterageFilterPanel filters={props.filters} status={meterage_status} set_status={set_meterage_status} />
        </div>
    )
}

const SellFilterResponsive = (props)=>{
    
    const [filter_panel_status,set_filter_panel_status] = useState("invisible opacity-[0]")
    const [meterage_status,set_meterage_status] = useState("invisible opacity-[0]")
    const [sort_status,set_sort_status] = useState("invisible opacity-[0]")

    return (
        <div className="relative w-full">
            <div className="w-full flex flex-row gap-x-[10px]">
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap cursor-pointer" onClick={()=>{set_sort_status("invisible opacity-[0]");set_meterage_status("invisible opacity-[0]");set_filter_panel_status("visivle opacity-[1]")}}>قیمت فروش</span>
                <span className="cursor-pointer border rounded px-[10px] py-[4px] whitespace-nowrap cursor-pointer" onClick={()=>{set_sort_status("invisible opacity-[0]");set_filter_panel_status("invisible opacity-[0]");set_meterage_status("visible opacity-[1]")}}>متراژ</span>
                <div className="w-full relative">
                    <div onClick={()=>{set_sort_status("visible opacity-[1]");set_filter_panel_status("invisible opacity-[0]");set_meterage_status("invisible opacity-[0]")}} className="cursor-pointer border border-orange w-full rounded bg-orange flex justify-center text-white px-[10px] py-[4px] whitespace-nowrap">
                        <div className="w-full"></div>
                        <span >مرتب سازی</span>
                        <div className="w-full flex justify-end">
                            <div className="flex flex-col text-[18px]">
                                <RiArrowDropDownLine className="rotate-180 mb-[-10px] mt-[-2px]"/>
                                <RiArrowDropDownLine />
                            </div>
                        </div>
                    </div>
                    <div className={`${sort_status} absolute transition-all duration-500 mt-[5px] gap-y-[10px] rounded-[5px] z-[2] bg-white flex flex-col w-full items-center border-[1px] border-orange py-[5px]`}>
                        <span className={"cursor-pointer " + (props.filters.sort_method == 1?"text-green":"")} onClick={()=>{props.filters.set_sort_method(1);props.filters.set_data(null);set_sort_status("invisible opacity-[0]")}}>کم به زیاد</span>
                        <span className={"cursor-pointer " + (props.filters.sort_method == -1?"text-green":"")} onClick={()=>{props.filters.set_sort_method(-1);props.filters.set_data(null);set_sort_status("invisible opacity-[0]")}}>زیاد به کم</span>
                        <span className={"cursor-pointer " + (props.filters.sort_method == null?"text-green":"")} onClick={()=>{props.filters.set_sort_method(null);props.filters.set_data(null);set_sort_status("invisible opacity-[0]")}}>بدون دسته بندی</span>
                    </div>
                </div>
            </div>
            <RentFilterPanel title={"فروش"} status={filter_panel_status} set_status={set_filter_panel_status} set_data={props.filters.set_data} set_filter={props.filters.set_price_filter} />
            <MeterageFilterPanel filters={props.filters} status={meterage_status} set_status={set_meterage_status} />
        </div>
    )
}

export const FliterCategoryResponsive = (props)=>{
    
    return (
        <div className="w-full flex flex-col gap-y-[20px]">
            <div className="w-full grid grid-cols-2 gap-x-[20px]">
                <CategoryButton set_data={props.set_data} set_update_tags={props.set_update_tags} text={"فروش"} isSelect={props.is_sell} set_is_sell={props.set_is_sell} is_sell={true} />
                <CategoryButton set_data={props.set_data} set_update_tags={props.set_update_tags} text={"اجاره"} isSelect={!props.is_sell} set_is_sell={props.set_is_sell} is_sell={false} />
            </div>
            {props.is_sell?<SellFilterResponsive filters={props} />:<RentFilterResponsive filters={props} />}
        </div>
    )
}

export default FilterCtaegory