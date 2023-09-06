"use client"
import {GrAdd} from "react-icons/gr"
import { delete_shop, getall_shop } from "@/app/utils/network/shop"
import {useState} from "react"
const ShopsItem = (props)=>{
    return (
        <div className="cursor-pointer items-center w-full border-[1px] rounded flex justify-between flex-row p-[20px]">
            <div className="flex items-center flex-row gap-x-[15px]">
                <img className="h-[100px] w-[100px] min-w-[100px] min-h-[100px] object-cover" src={"http://"+props.item.images[0]} />
                <span className="text-[17px]">{props.item.name}</span>
                <span>{props.item.is_brand?"برند":""}</span>
            </div>
            <div className="flex flex-row gap-x-[15px] opacity-[0.5]">
                <span onClick={()=>{props.set_data_set(props.item._id);props.set_select_page(3);}}>ویرایش</span>
                <span onClick={()=>{delete_shop(props.item._id).then((data)=>{props.set_data(null)})}}>حذف</span>
            </div>
            
        </div>
    )
}

const ShopsMainAdmin = (props)=>{
    const [data,set_data] = useState(null)
    const [search_input,set_search] = useState(null)
    if(data == null){
        var search = search_input;
        if(search == ""){
            search = "";
        }
        getall_shop({search}).then((data)=>{
            console.log(data)
            set_data(data.data)
        })
    }
    return (
        <div className="w-full h-full flex relative">
            <div className="flex relative flex-col overflow-y-scroll w-full p-[30px] gap-y-[20px] items-start">
                <span className="text-[18px] font-bold">برند ها و واحد های تجاری</span>
                <input value={search_input} onChange={(e)=>{set_search(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="جست و جو کردن..." />
                <button onClick={()=>{set_data(null)}} className="bg-orange text-white rounded px-[15px] py-[5px]" >جست و جو کردن</button>
                <button className="bg-orange text-white rounded px-[15px] py-[5px]" onClick={()=>{props.set_data_set(null);props.set_select_page(3);}} >افزودن</button>
                {data == null?<></>: data.map((item)=>{
                    return (<ShopsItem item={item} set_data_set={props.set_data_set} set_select_page={props.set_select_page} set_data={set_data} />)
                })}
            </div>
        </div>
    )
}
export default ShopsMainAdmin