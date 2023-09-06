import axios from "axios";
import config from "./main";

export async function get_contactus(){
    try{
        const data = await axios.get(config.url + "contactus/get")
        console.log(data.data)
        return data.data
    }catch(e){
        return e
    }
}

export async function add_contactus(phone_numbers,address,location_link){
    try{
        const data = await axios.post(config.url + "contactus/add",{phone_numbers,address,location_link},{headers:{...config.headers}})
        console.log(data.data)
        return data.data
    }catch(e){
        return e
    }
}