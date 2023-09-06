import axios from "axios";
import config from "./main";

export async function add_sell(name,images,tags,feature,meterage,price,address){
    try{
        const data = await axios.post(config.url + "sellandrent/sell/add",{name,images,tags,feature,meterage,price,address},{headers:{...config.headers}})
        return data
    }catch(e){
        return e.request
    }
}

export async function get_sell(filter){
    const data = await axios.get(config.url + "sellandrent/sell/getall",{params:{...filter}})
    return data.data
}

export async function get_one_sell(sellshop_id){
    try{
        const data = await axios.get(config.url + "sellandrent/sell/get",{headers:{sellshop_id}})
        return data.data
    }catch(e){
        e.request.data
    }
}

export async function update_sell(sellshop_id,name,images,tags,feature,meterage,price,address){
    try{
        const data = await axios.put(config.url + "sellandrent/sell/update",{name,images,tags,feature,meterage,price,address},{headers:{...config.headers,sellshop_id}})
        return data
    }catch(e){
        return e.request
    }
}

export async function delete_sell(sellshop_id){
    const data = await axios.delete(config.url + "sellandrent/sell/delete",{headers:{...config.headers,sellshop_id}})
    return data.data
}

export async function getall_sell(filter){
    const data = await axios.get(config.url + "sellandrent/sell/getall",{params:{...filter}})
    return data.data
}

export async function get_tags(){
    const data = await axios.get(config.url + "sellandrent/sell/tags")
    return data.data
}