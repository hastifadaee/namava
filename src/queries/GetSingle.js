import axios from "axios";
export const GetSingle = (id , type)=>{
  return(
      axios({
          url : `https://www.namava.ir/api/v2.0/medias/${id}/single-${type === 'Movie' ? 'movie' : 'series' }` ,
          method : 'GET'
      })
  )
};