import axios from "axios";
import config from "./main";

export async function new_message(full_name,phone_number,email,text){
    try{
        const data = await axios.post(config.url+"admin-message/new",{full_name,phone_number,email,text})
        return data
    }catch(e){
        return e.request
    }
}

export async function get_message(){
    try{
        const data = await axios.get(config.url+"admin-message/get",{headers:{...config.headers}})
        return data.data
    }catch(e){
        return e.request.data
    }
}

export async function get_message_cv(){
    try{
        const data = await axios.get(config.url+"workwithus/get",{headers:{...config.headers}})
        return data.data
    }catch(e){
        return e.request.data
    }
}

export async function new_message_cv(full_name,phone_number,email,text,cv_link,gender,reshte,madrak){
    try{
        const data = await axios.post(config.url+"workwithus/new",{full_name,phone_number,email,text,cv_link,gender,reshte,madrak})
        return data
    }catch(e){
        return e.request
    }
}

