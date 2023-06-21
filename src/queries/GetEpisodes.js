import axios from "axios";
export const GetEpisodes = (id) =>{
    return(
      axios({
          url : `https://www.namava.ir/api/v2.0/medias/seasons/${id}/episodes` ,
          method : 'GET'
      })
  )
};