"use client"
import {getall_shop} from "@/app/utils/network/shop.js"
import  Content  from "./content.jsx"
import  Navbar  from "./navbar.jsx"
import {useEffect, useState} from "react"
var is_brand = null
var set_data_change = false
export default ()=>{
    const [search,set_search] = useState(null)
    const [categorys,set_categorys] = useState(null)
    const [tags,set_tags] = useState(null)
    const [floor,set_floor] = useState(null)
    const [data,set_data] = useState(null)

    if(set_data_change == true){
        set_data_change = null
        set_data(null)
    }
        if(data == null){
            getall_shop({search,categorys,tags,floor,is_brand}).then((data_get)=>{
                console.log("filter : ",categorys)
                var list_data = []
                var len_data_chunck = parseInt(data_get.data.length / 20)
                if(data_get.data.length % 20 > 0){
                    len_data_chunck += 1
                }
                for(var i = 0;i<len_data_chunck;i++){
                    list_data.push([...data_get.data.slice(i * 20,(i+1)*20)])
                }
                set_data(list_data)
            })
        }
    useEffect(()=>{
        const querys = new URLSearchParams(window.location.search)
        const categorys_query=querys.get("category")
        const is_brand_query=querys.get("is_brand")
        
        if(is_brand_query == "true" && is_brand == null){
            console.log("All Ok")
            
            is_brand = true
            set_data(null)
            
        }if(categorys_query != null && set_data_change == false){
            set_data_change = true
            set_categorys([...categorys_query.split(",")])
        }
        
    })
    
    return(
        <>
            <section className="flex flex-col md:flex-row md:px-[90px] px-[20px] gap-5">
                <Navbar set_data={set_data} search={search} set_search={set_search} categorys={categorys} set_categorys={set_categorys} tags={tags} set_tags={set_tags} floor={floor} set_floor={set_floor} />
                {data == null?<></>:data.length == 0?<></>:<Content data={data[0]}/>}
            </section>
        </>
    )
}
