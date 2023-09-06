import axios from "axios";
import config from "./main";

export async function get_aboutus(){
    try{
        const data = (await axios.get(config.url+"aboutus/get"))
        console.log(data.data)
        return data.data
    }catch(e){
        console.log(e)
        return e.data 
    }
    
}

export async function add_aboutus(title1,text1,title2,text2,title3,texts,images_slider){
    try{
        const data = (await axios.post(config.url+"aboutus/add",{title1,text1,title2,text2,title3,texts,images_slider},{headers:{...config.headers}}))
        console.log(data.data)
        return data.data
    }catch(e){
        console.log(e)
        return e.data 
    }
}

