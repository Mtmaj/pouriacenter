"use client"
import Header from "@/app/components/header/index"
import Footer from "@/app/components/footer/index"
import MainSellAndRentPage from "@/app/components/sellandrendpage/index"
import Title from "@/app/components/home/title/index"
import { useId,useState,useEffect } from "react"
import Sell from "@/app/components/home/sell/index"
import PageTitle from "@/app/components/titlepage/index"
import { get_one_rent } from "@/app/utils/network/rent";
import { get_one_sell } from "@/app/utils/network/sell";
const SellRentPage = ()=>{
    const [data,set_data] = useState(null)
    const useid_ = useId()
    useEffect(()=>{
        if(data == null){
            var data_url = new URLSearchParams(window.location.search)
            var is_sell = data_url.get("is_sell")
            console.log(is_sell)
            const id_data = data_url.get("id")
            
            if(is_sell == "false"){
                console.log("OKKKKKKKKKKKKKK")
                get_one_rent(id_data).then((data_get)=>{
                    console.log(data_get)
                    try{
                    if(data_get.msg == null){
                        set_data({status:200,...data_get})
                    }else{
                        set_data({status : 404})
                    }}catch(e){
                        set_data({status:200,...data_get})
                    }
                })
            }else{
                console.log(is_sell)

                get_one_sell(id_data).then((data_get)=>{
                    console.log(data_get)
                    try{
                    if(data_get.msg == null){
                        set_data({status:200,...data_get})
                    }else{
                        set_data({status : 404})
                    }}catch(e){
                        set_data({status:200,...data_get})
                    }
                })
            }
        }
    })
    return (
        <>
            <Header/>
            <div className="h-[130px] w-full"></div>
            {data == null?<></>:data.status == 404?<span>نتیجه ای پیدا نشد 404</span>:
            
            <>
                
                <PageTitle items={["واحد فروش و اجاره",data.name]} />
                <div className="h-[30px]"></div>
                <MainSellAndRentPage data={data} />      
                <Title text={"آگهی های مشابه"} idname={useid_.replaceAll(":","")} />
                <Sell />
            </>}
        </>
        
    );
}

export default SellRentPage