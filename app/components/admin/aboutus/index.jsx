import { useState } from "react"
import {upload_image} from "@/app/utils/network/upload" 
import { add_aboutus, get_aboutus } from "@/app/utils/network/aboutus"
const AboutUsAdmin = ()=>{
    const [is_get,set_is_get] = useState(false)
    
    const [title1,set_title1] = useState("")
    const [title3,set_title3] = useState("")
    const [title2,set_title2] = useState("")
    const [text1,set_text1] = useState("")
    const [text2,set_text2] = useState("")
    const [image_list,set_image_list] = useState([])
    const [texts,set_texts] = useState([])
    const [texts_input,set_texts_input] = useState("")
    if(!is_get){
        get_aboutus().then((data)=>{
            set_title1(data.title1)
            set_title2(data.title2)
            set_title3(data.title3)
            set_text1(data.text1)
            set_text2(data.text2)
            set_texts([...data.texts])
            set_image_list([...data.images_slider])
            set_is_get(true)
        })
    }
    function handleChange(event){
        upload_image(event.target.files[0]).then((data)=>{
            var change_list = [...image_list]
            change_list.push(data.img_url)
            set_image_list([...change_list])
        })
    }
    return (
        <div className="w-full flex flex-col items-start gap-y-[20px] overflow-y-scroll p-[30px]">
            <span className="text-[20px]">ثبت بخش درباره ما</span>
            <input onChange={(e)=>{set_title1(e.currentTarget.value)}} value={title1} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="تیتر اول" />
            <textarea onChange={(e)=>{set_text1(e.currentTarget.value)}} value={text1} className="bg-[rgba(0,0,0,0.1)] min-h-[300px] rounded p-[5px] md:w-[300px] w-full" placeholder="متن اول" />
            <input onChange={(e)=>{set_title2(e.currentTarget.value)}} value={title2} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="تیتر دوم" />
            <textarea onChange={(e)=>{set_text2(e.currentTarget.value)}} value={text2} className="bg-[rgba(0,0,0,0.1)] min-h-[300px] rounded p-[5px] md:w-[300px] w-full" placeholder="متن دوم" />
            <input onChange={(e)=>{set_title3(e.currentTarget.value)}} value={title3} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="تیتر سوم" />
            <input value={texts_input} onChange={(e)=>{set_texts_input(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="(متون جدای پایین صفحه)متن سوم" />
            {texts.map((item)=>{
            return  <span onClick={()=>{
                var list_change = [...texts]
                list_change.splice(list_change.indexOf(item),1)
                set_texts([...list_change])
            }}>{"متن اول : " + item}</span>
            })}
            <button onClick={()=>{
                var list_change = [...texts]
                list_change.push(texts_input)
                set_texts_input("")
                set_texts([...list_change])
            }} className="bg-orange text-white rounded px-[15px] py-[5px]" >افزودن متن</button>
            <span>جهت حذف متن روی آن کلیک کنید</span>
            
            <div className="w-full flex flex-row overflow-x-scroll min-h-[100px] h-[100px]">
                {image_list.map((item)=>{
                    
                     return (<img className="min-w-[100px] w-[100px] h-[100px] min-h-[100px] object-cover" src={"http://"+item} onClick={()=>{
                       var list_change = [...image_list]
                       list_change.splice(list_change.indexOf(item),1)
                       set_image_list([...list_change])
                     }} />)
                    
                })}
                
            </div>
            <span>دکمه افزودن عکس :</span>
            <input type="file" onChange={handleChange} className="bg-orange text-white rounded px-[15px] py-[5px] min-h-[40px]" placeholder="افزودن عکس" />
            <span>جهت حذف عکس روی آن کلیک کنید</span>
            <button className="bg-orange text-white rounded px-[15px] py-[5px]" onClick={()=>{add_aboutus(title1,text1,title2,text2,title3,texts,image_list)}}>ثبت تغییرات</button>
        </div>
    )
}

export default AboutUsAdmin