import { useState } from "react"
import {GrAdd} from "react-icons/gr"
import { getalladmin,delete_news } from "@/app/utils/network/news"

const NewsItem = (props)=>{
    return (
        <div className="cursor-pointer items-center w-full border-[1px] rounded flex justify-between flex-row p-[20px]">
            <div className="flex items-center flex-row gap-x-[15px]">
                <img className="h-[100px] w-[100px] min-w-[100px] min-h-[100px] object-cover" src={"https://"+props.item.images[0]} />
                <span className="text-[17px]">{props.item.title}</span>
                <span className="text-[17px]">{props.item.is_general?"اخبار عمومی":"اخبار داخلی"}</span>
                <span className="text-[17px]">کد : {props.item.code}</span>
            </div>
            <div className="flex flex-row gap-x-[15px] opacity-[0.5]">
                <span onClick={()=>{props.set_data_set(props.item.code);props.set_select_page(10)}}>ویرایش</span>
                <span onClick={()=>{delete_news(props.item._id).then((data)=>{props.set_data(null)})}}>حذف</span>
            </div>
            
        </div>
    )
}

const NewsMainAdmin = (props)=>{
    const [data,set_data] = useState(null)
    if(data == null){
        getalladmin().then((data_get)=>{
            set_data(data_get)
        })
    }
    return (
        <div className="w-full h-full flex relative">
            <div className="flex relative flex-col overflow-y-scroll w-full p-[30px] gap-y-[20px] items-start">
                <span className="text-[18px] font-bold">اخبار</span>
                <button className="bg-orange text-white rounded px-[15px] py-[5px]" onClick={()=>{props.set_data_set(null); props.set_select_page(10)}} >افزودن</button>
                {data == null?<></>:
                    data.map((item)=>{
                        return (<NewsItem item={item} set_data={set_data} set_data_set={props.set_data_set} set_select_page={props.set_select_page} />)
                    })
                }    
            </div>
        </div>
    )
}
export default NewsMainAdmin