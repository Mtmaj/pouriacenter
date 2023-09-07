"use client"
import { useState } from "react"
import {upload_image} from "@/app/utils/network/upload" 
import { add_news,get_by_code,update_news } from "@/app/utils/network/news"
const NewsAddAdmin = (props)=>{
    const [is_get,set_is_get] = useState(false)
    const [title,set_title] = useState("")
    const [text1,set_text1] = useState("")
    const [text2,set_text2] = useState("")
    const [image_list,set_image_list] = useState([])
    const [code,set_code] = useState("")
    const [is_general,set_is_general] = useState(false)
    const [status,set_status] = useState(null)
    const [object_id,set_object_id] = useState("")
    if(!is_get){
        if(props.data_set != null){
            console.log(props.data_set)
            get_by_code(props.data_set).then((data)=>{
                console.log(data)
                set_title(data.title)
                set_code(data.code)
                set_text1(data.text1)
                set_text2(data.text2)
                set_is_general(data.is_general)
                set_image_list(data.images)
                set_object_id(data._id)
                set_is_get(true)
            })
        }
    }
    function handleChange(event){
        upload_image(event.target.files[0]).then((data)=>{
            var change_list = [...image_list]
            change_list.push(data.img_url)
            set_image_list([...change_list])
        })
    }
    function handleSubmit(){
        if(props.data_set == null ){
        add_news(title,code,image_list,text1,text2,is_general).then((data)=>{
            if(data.status == 200){
                props.set_select_page(9)
            }else{
                set_status("اطلاعات را کامل وارد کنید")
            }
        })}else{
            update_news(title,code,image_list,text1,text2,is_general,object_id).then((data)=>{
                if(data.status == 200){
                    props.set_select_page(9)
                }else{
                    set_status("اطلاعات را کامل وارد کنید")
                }
            })  
        }
    }
    console.log(is_general)
    return (
        <div className="w-full flex flex-col items-start gap-y-[20px] overflow-y-scroll p-[30px]">
            <span className="text-[20px]">افزودن یا ویرایش اخبار</span>
            <input onChange={(e)=>{set_title(e.currentTarget.value)}} value={title} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="تیتر" />
            <input onChange={(e)=>{set_code(e.currentTarget.value)}} value={code} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="کد خبر" />
            <textarea onChange={(e)=>{set_text1(e.currentTarget.value)}} value={text1} className="bg-[rgba(0,0,0,0.1)] min-h-[300px] rounded p-[5px] md:w-[300px] w-full" placeholder="متن اول" />
            <textarea onChange={(e)=>{set_text2(e.currentTarget.value)}} value={text2} className="bg-[rgba(0,0,0,0.1)] min-h-[300px] rounded p-[5px] md:w-[300px] w-full" placeholder="متن دوم" />
            <div className="flex flex-row gap-x-[10px] ">
                <span>اخبار عمومی</span>
                <input type="checkbox" checked={is_general} onChange={(e)=>{set_is_general(e.currentTarget.checked);}}/>
            </div>
            <div className="w-full flex flex-row overflow-x-scroll min-h-[100px] h-[100px]">
                {image_list.map((item)=>{
                    
                     return (<img className="min-w-[100px] w-[100px] h-[100px] min-h-[100px] object-cover" src={"https://"+item} onClick={()=>{
                       var list_change = [...image_list]
                       list_change.splice(list_change.indexOf(item),1)
                       set_image_list([...list_change])
                     }} />)
                    
                })}
                
            </div>
            <span>دکمه افزودن عکس :</span>
            <input type="file" onChange={handleChange} className="bg-orange text-white rounded px-[15px] py-[5px] min-h-[40px]" placeholder="افزودن عکس" />
            <span>جهت حذف عکس روی آن کلیک کنید</span>
            <button className="bg-orange text-white rounded px-[15px] py-[5px]" onClick={()=>{handleSubmit()}}>ثبت</button>
            <span>{status}</span>
        </div>
    )
}

export default NewsAddAdmin