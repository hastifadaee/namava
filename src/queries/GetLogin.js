import axios from "axios";

export const GetLogin = (mail , pass) =>(
        axios({
            url : 'https://reqres.in/api/login',
            method : 'POST' ,
            data : {
                'email' : mail ,
                'password': pass
            }
        })
    )