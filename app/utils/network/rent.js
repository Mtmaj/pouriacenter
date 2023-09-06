import axios from "axios";
import config from "./main";

export async function add_rent(name,images,tags,feature,meterage,rent_price,mortgage_price,address){
    try{
        const data = await axios.post(config.url + "sellandrent/rent/add",{name,images,tags,feature,meterage,rent_price,mortgage_price,address},{headers:{...config.headers}})
        return data
    }catch(e){
        return e.request
    }
}

export async function get_rent(filter){
    const data = await axios.get(config.url + "sellandrent/rent/getall",{params:{...filter}})
    return data.data
}

export async function get_one_rent(rentshop_id){
    try{
    const data = await axios.get(config.url + "sellandrent/rent/get",{headers:{rentshop_id}})
    return data.data
    }catch(e){
        e.request.data
    }
}

export async function update_rent(rentshop_id,name,images,tags,feature,meterage,rent_price,mortgage_price,address){
    try{
        const data = await axios.put(config.url + "sellandrent/rent/update",{name,images,tags,feature,meterage,rent_price,mortgage_price,address},{headers:{...config.headers,rentshop_id}})
        return data
    }catch(e){
        return e.request
    }
}

export async function delete_rent(rentshop_id){
    const data = await axios.delete(config.url + "sellandrent/rent/delete",{headers:{...config.headers,rentshop_id}})
    return data.data
}

export async function getall_rent(filter){
    const data = await axios.get(config.url + "sellandrent/rent/getall",{params:{...filter}})
    return data.data
}

export async function get_tags_rent(){

    const data = await axios.get(config.url + "sellandrent/rent/tags")
    return data.data
}