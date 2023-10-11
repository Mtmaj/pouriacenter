import {useState} from "react"
import {upload_image} from "@/app/utils/network/upload" 
import { get_one_shop,update_shop,add_shop } from "@/app/utils/network/shop"

const ShopAddAdmin = (props)=>{
    const [image_list,set_image_list] = useState([])
    const [logo,set_logo] = useState(null)
    const [name,set_name] = useState("")
    const [category,set_category] = useState("")
    const [floor,set_floor] = useState("")
    const [tags,set_tags] = useState("")
    const [description,set_description] = useState("")
    const [address,set_address] = useState("")
    const [social_media,set_social_media] = useState("")
    const [is_brand,set_is_brand] = useState(false)
    const [status,set_status] = useState(null)
    const [is_get,set_is_get] = useState(false)
    function handleChange(event){
        upload_image(event.target.files[0]).then((data)=>{
            var change_list = [...image_list]
            change_list.push(data.img_url)
            set_image_list([...change_list])
        })
    }
    function handleChangeLogo(event){
        upload_image(event.target.files[0]).then((data)=>{
            set_logo(data.img_url)
        })
    }
    if(props.data_set != null){
        if(!is_get){
            get_one_shop(props.data_set).then((data_get)=>{
                const data = data_get.data
                set_name(data.name)
                set_category(data.category)
                set_floor(data.floor)
                set_is_brand(data.is_brand)
                set_logo(data.logo)
                set_description(data.description)
                set_social_media(data.social_media)
                set_tags(data.tags.toString().replaceAll(",","|"))
                set_image_list([...data.images])
                set_address(data.address)
                set_is_get(true)
            })
        }
        
    }
    return (
        <div className="w-full flex flex-col items-start gap-y-[20px] overflow-y-scroll p-[30px]">
            <span className="text-[20px]">افزودن واحد تجاری یا برند</span>
            <input value={name} onChange={(e)=>{set_name(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="نام واحد..." />
            {logo == null?<></>:<img onClick={()=>{set_logo(null)}} className="min-w-[50px] w-[50px] min-h-[50px] h-[50px] object-cover" src={"https://" + logo} />}
            <span>دکمه افزودن لوگو :</span>
            <input type="file" onChange={handleChangeLogo} className="bg-orange text-white rounded px-[15px] py-[5px] min-h-[40px]" placeholder="افزودن لوگو" />
            <input value={category} onChange={(e)=>{set_category(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="دسته بندی..." />
            <input value={floor} onChange={(e)=>{set_floor(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="طبقه..." />
            <input value={tags} onChange={(e)=>{set_tags(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="برچسب ها..." />
            <span>برچسب ها را با | جدا کنید</span>
            <input value={description} onChange={(e)=>{set_description(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="توضیحات..." />
            <input value={address} onChange={(e)=>{set_address(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="آدرس..." />
            <input value={social_media} onChange={(e)=>{set_social_media(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="لینک شبکه اجتماعی..." />
            <div className="flex flex-row gap-x-[10px] ">
                <span>برند</span>
                <input type="checkbox" checked={is_brand} onChange={(e)=>{set_is_brand(e.currentTarget.checked);}}/>
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
            <button onClick={()=>{
                if(props.data_set == null){
                    add_shop(name,logo,floor,category,tags.split("|"),image_list,description,address,social_media,is_brand).then((data)=>{
                        if(data.status == 200){
                            props.set_select_page(2)
                        }else{
                            set_status("اطلاعات را کامل وارد نماییید")
                        }
                    })
                }else{
                    update_shop(props.data_set,name,logo,floor,category,tags.split("|"),image_list,description,address,social_media,is_brand).then((data)=>{
                        if(data.status == 200){
                            props.set_select_page(2)
                        }else{
                            set_status("اطلاعات را کامل وارد نماییید " + data.status.toString())
                        }
                    })
                }
            }}
                 className="bg-orange text-white rounded px-[15px] py-[5px]" >ثبت تغییرات</button>
            {status == null?<></>:<span className="text-green">{status}</span>}
        </div>
    )
}

export default ShopAddAdmin