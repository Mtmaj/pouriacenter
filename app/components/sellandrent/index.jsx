"use client"
import Filters from "./filters/index"
import {FliterCategoryResponsive} from "./filters/index"
import SearchIcon from "@/public/icons/search.svg"
import Image from "next/image"
import Link from "next/link"
import {SellItem} from "../home/sell"
import { useState } from "react"
import { get_tags,getall_sell } from "../../utils/network/sell"
import { getall_rent,get_tags_rent } from "../../utils/network/rent"

const Search = (props)=>{
    const [search,set_search] = useState("")
    return (
        
        <div className="md:w-[90%] w-full flex flex-row border-[#989797] border-[1px] rounded-[10px] md:pr-[20px] pl-[4px] py-[4px] pr-[10px] transition-all duration-500 focus-within:border-orange">
            <input value={search} onChange={(e)=>{set_search(e.currentTarget.value)}} type="text" className="text-[15px] !outline-none bg-[rgba(0,0,0,0)] w-full group" placeholder="جست و جو در آگهی های رهن و اجاره ..."/>
            <div onClick={()=>{props.set_search(search);props.set_data(null)}} className="h-[35px] w-[38px] cursor-pointer bg-orange flex items-center justify-center rounded-[10px] ">
                <Image className="w-[20px] h-[20px]" src={SearchIcon} alt="جست و جو"  />
            </div>
        </div>
        
    )
}

const Tags  = (props)=>{
    const [data,set_data] = useState(null)

    if(props.update_tags == null){
        if(props.is_sell){
        get_tags().then((data_get)=>{
            console.log(data_get)
            set_data([...data_get])
            props.set_update_tags(true)
        })}else{
            get_tags_rent().then((data_get)=>{
                console.log(data_get)
                set_data([...data_get])
                props.set_update_tags(true)
            })  
        }
    }
    function handleTags(item){
        var change_list = [...props.tags_select]
        if(change_list.includes(item)){
            change_list.splice(change_list.indexOf(item),1)
        }else{
            change_list.push(item)
        }
        
        props.set_tags_select([...change_list])
        props.set_data(null)
    }
    return (
        <div className="md:w-[90%] w-full flex flex-row rounded-full shadow lg:shadow-none py-[5px] lg:p-0 gap-x-[7px]">
            {data == null?<></>:data.map((item)=>{
                return (<div onClick={()=>{handleTags(item)}} className={"lg:mr-[5px] duration-500 transition-all mr-[5px] cursor-pointer rounded-full text-[14px] px-[14px] py-[5px] " + (props.tags_select != null ? props.tags_select.includes(item) == true?"bg-green text-white":"bg-[#E7E7E7] text-black":"bg-[#E7E7E7] text-black")}>#{item}</div>)
            })}
            
        </div>
    )
}

const Main = ()=>{
    const [is_sell,set_is_sell] = useState(true)
    const [meterage_filter,set_meterage_filter] = useState({})
    const [price_filter,set_price_filter] = useState({})
    const [rent_price_filter,set_rent_price_filter] = useState({start:null})
    const [mortgage_price_filter,set_mortgage_price_filter] = useState({})
    const [sort_method,set_sort_method] = useState(null)
    const [tags_select,set_tags_select] = useState([])
    const [search,set_search] = useState(null)
    const [data,set_data] = useState(null)
    const [update_tags,set_update_tags] = useState()
    if(data == null){
        if(is_sell){
            console.log(price_filter)
            getall_sell({"start_price":price_filter.start , "end_price":price_filter.end,"start_meterage":meterage_filter.start,"end_meterag":meterage_filter.end,"tags":(tags_select.length == 0?null:tags_select),"search":(search==""?null:search),"sort":sort_method}).then((data)=>{
                set_data(data)
            })
        }else{
            getall_rent({"start_rent_price":rent_price_filter.start , "end_rent_price":rent_price_filter.end,"start_mortgage_price":mortgage_price_filter.start , "end_mortgage_price":mortgage_price_filter.end,"start_meterage":meterage_filter.start,"end_meterage":meterage_filter.end,"tags":(tags_select.length == 0?null:tags_select),"search":(search==""?null:search),"sort":sort_method}).then((data)=>{
                set_data(data)
            })
        }
    }


    return (
        <div className="flex flex-row w-full md:px-[90px] px-[30px] py-[20px] gap-x-[20px]">
            <div className="min-w-[330px] hidden md:block">
                <Filters set_update_tags={set_update_tags} is_sell={is_sell} set_is_sell ={set_is_sell} meterage_filter={meterage_filter} set_meterage_filter={set_meterage_filter} price_filter={price_filter} set_price_filter={set_price_filter} rent_price_filter={rent_price_filter} set_rent_price_filter={set_rent_price_filter} mortgage_price_filter={mortgage_price_filter} set_mortgage_price_filter={set_mortgage_price_filter} sort_method={sort_method} set_sort_method={set_sort_method} set_data={set_data} />
            </div>
            
            <div className="flex flex-col w-full items-center gap-y-[20px]">
                <Search set_search={set_search} set_data={set_data} />
                <Tags update_tags={update_tags} set_update_tags={set_update_tags} tags_select={tags_select} is_sell={is_sell} set_tags_select={set_tags_select} set_data={set_data} />
                <div className="w-full md:hidden">
                    <FliterCategoryResponsive set_update_tags={set_update_tags} is_sell={is_sell} set_is_sell ={set_is_sell} meterage_filter={meterage_filter} set_meterage_filter={set_meterage_filter} price_filter = {price_filter} set_price_filter={set_price_filter} rent_price_filter={rent_price_filter} set_rent_price_filter={set_rent_price_filter} mortgage_price_filter={mortgage_price_filter} set_mortgage_price_filter={set_mortgage_price_filter} sort_method={sort_method} set_sort_method={set_sort_method} set_data={set_data} />
                </div>
                <div className="md:w-[90%] w-full grid lg:grid-cols-2 gap-y-[20px] grid-cols-1 gap-x-[50px]">
                    {data == null?<></>:data.map((item)=>{
                        return (<SellItem item={item}/>)
                    })}
                </div>
            </div>
            

        </div>
    )
}

export default Main