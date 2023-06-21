import axios from "axios";
export const GetSlider = ()=>{
    return axios({
        url : "https://www.namava.ir/api/v2.0/medias/sliders/1316" ,
        method : 'GET'
    })
}