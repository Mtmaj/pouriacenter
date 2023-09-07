import axios from "axios";
import FormData from "form-data";
import config from "./main";

export async function upload_image(image_path){
    const formdata = new FormData()
    console.log("ok")
    formdata.append("image",image_path)
    const data = await axios.post(config.url+"upload/image",formdata,{headers:{...config.headers},maxBodyLength:Infinity})
    console.log("ooook")
    console.log(data)
    return data.data
}