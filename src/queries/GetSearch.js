import axios from "axios";
export const GetSearch = (val , first)=>{
    return(
        axios({
            url : `https://www.namava.ir/api/v3.0/search/advance?type=all&count=${first === true ? 20 : 50}&page=1&query=${val}`,
            method : 'GET'
        })
    )
};