import axios from "axios";
import config from "./main";

export async function add_news(title,code,images,text1,text2,is_general){
    try{
        const data = await axios.post(config.url + "news/add",{title,code,images,text1,text2,is_general},{headers:{...config.headers}})
        
        return data
    }catch(e){
        console.log(e.request)
        return e.request
    }
}
export async function update_news(title,code,images,text1,text2,is_general,news_id){
    try{
        const data = await axios.put(config.url + "news/update",{title,code,images,text1,text2,is_general},{headers:{...config.headers,news_id}})
        
        return data
    }catch(e){
        console.log(e.request)
        return e.request
    }
}

export async function getalladmin(){
    const data = await axios.get(config.url + "news/getalladmin")
    return data.data
}

export async function get_by_code(code){
    const data = await axios.get(config.url + "news/get",{headers:{news_id:code}})
    return data.data
}

export async function delete_news(news_id){
    const data = await axios.delete(config.url+"news/delete",{headers:{...config.headers,news_id}})
    return data.data
}

export async function getAll(is_general){
    const data = await axios.get(config.url + "news/getall",{headers:{is_general:is_general}})
    return data.data
}