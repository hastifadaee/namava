import axios from "axios";
export const GetMore = (id)=>{
    return(
        axios({
            url :`https://www.namava.ir/api/v1.0/medias/${id}/brief-preview` ,
            method : 'GET'
        })
    )
};