"use client"
import { useState } from "react";
import {upload_image} from "@/app/utils/network/upload" 
import { add_rent,update_rent,get_one_rent } from "@/app/utils/network/rent" 

const SellAddAdmin = (props)=>{
    const [name,set_name] = useState("")
    const [mortgage_price,set_mortgage_price] = useState("")
    const [rent_price,set_rent_price] = useState("")
    const [meterage,set_meterage] = useState("")
    const [labels,set_labels] = useState("")
    const [features,set_features] = useState([])
    const [feature_input,set_feature_input] = useState("")
    const [image_list,set_image_list] = useState([])
    const [address,set_address] = useState("")
    const [status,set_status] = useState(null)
    const [is_get,set_is_get] = useState(false)
    function handleChange(event){
        upload_image(event.target.files[0]).then((data)=>{
            var change_list = [...image_list]
            change_list.push(data.img_url)
            set_image_list([...change_list])
        })
    }
    if(props.data_set != null){
        if(!is_get){
            get_one_rent(props.data_set).then((data)=>{
                set_name(data.name)
                set_mortgage_price(data.mortgage_price)
                set_rent_price(data.rent_price)
                set_meterage(data.meterage)
                set_labels(data.tags.toString().replaceAll(",","|"))
                set_features([...data.feature])
                set_image_list([...data.images])
                set_address(data.address)
                set_is_get(true)
            })
        }
        
    }

    return (
        <div className="w-full flex flex-col items-start gap-y-[20px] overflow-y-scroll p-[30px]">
            <span className="text-[20px]">افزودن یا ویرایش واحد فروش</span>
            <input value={name} onChange={(e)=>{set_name(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="نام واحد..." />
            <input value={rent_price} onChange={(e)=>{set_rent_price(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="قیمت اجاره..." />
            <input value={mortgage_price} onChange={(e)=>{set_mortgage_price(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="قیمت رهن..." />
            <input value={meterage} onChange={(e)=>{set_meterage(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="متراژ..." />
            <input value={address} onChange={(e)=>{set_address(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="آدرس..." />
            <input value={labels} onChange={(e)=>{set_labels(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="برچسب ها..." />
            <span>برچسب ها را با | جدا کنید</span>
            <input value={feature_input} onChange={(e)=>{set_feature_input(e.currentTarget.value)}} className="bg-[rgba(0,0,0,0.1)] rounded p-[5px] md:w-[300px] w-full" placeholder="ویژگی ها..." />
            <button onClick={()=>{
                var change_list = [...features]
                change_list.push(feature_input)
                set_feature_input("")
                set_features([...change_list])
            }} className="bg-orange text-white rounded px-[15px] py-[5px]" >افزودن  ویژگی</button>
            {features.map((item,index)=>{
                return (<span onClick={()=>{var change_list = [...features];change_list.splice(index,1);set_features([...change_list])}}>ویژگی {index + 1} : {item}</span>)
            })}
            <span>جهت حذف ویژگی روی آن کلیک کنید</span>
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
            <button onClick={()=>{
                if(props.data_set == null){
                    add_rent(name,image_list,labels.split("|"),features,meterage,rent_price,mortgage_price,address).then((data)=>{
                        if(data.status == 200){
                            props.set_select_page(6)
                        }else{
                            set_status("اطلاعات را کامل وارد نماییید")
                        }
                    })
                }else{
                    update_rent(props.data_set,name,image_list,labels.split("|"),features,meterage,rent_price,mortgage_price,address).then((data)=>{
                        if(data.status == 200){
                            props.set_select_page(6)
                        }else{
                            set_status("اطلاعات را کامل وارد نماییید")
                        }
                    })
                }
            }}
                 className="bg-orange text-white rounded px-[15px] py-[5px]" >ثبت تغییرات</button>
            {status == null?<></>:<span className="text-green">{status}</span>}
        </div>
    )
}

export default SellAddAdmin