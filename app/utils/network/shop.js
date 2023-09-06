import axios from "axios";
import config from "./main";

export async function add_shop(name,logo,floor,category,tags,images,description,address,social_media,is_brand){
    try{
        const data = await axios.post(config.url + "shops/add",{name,logo,floor,category,tags,images,description,address,social_media,is_brand},{headers:{...config.headers}})
        return data
    }catch(e){
        return e.request
    }
}

export async function getall_shop(filter){
    try{
        const data = await axios.get(config.url + "shops/getall",{params:{...filter}})
        return data
    }catch(e){
        return e.request
    }
}

export async function get_one_shop(shop_id){
    try{
        const data = await axios.get(config.url + "shops/get",{headers:{shop_id}})
        return data
    }catch(e){
        return e.request
    }
}

export async function update_shop(shop_id,name,logo,floor,category,tags,images,description,address,social_media,is_brand){
    try{
        const data = await axios.put(config.url+"shops/update",{name,logo,floor,category,tags,images,description,address,social_media,is_brand},{headers:{...config.headers,shop_id}})
        return data
    }catch(e){
        return e.request
    }
}

export async function delete_shop(shop_id){
    try{
        const data = await axios.delete(config.url+"shops/delete",{headers:{...config.headers,shop_id}})
        return data
    }catch(e){
        return e.request
    }
}