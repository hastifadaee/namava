import { useState } from "react";
import { Col, Row, Input } from "reactstrap";
import { Logo } from '../base/Logo';
import { GetLogin } from "../queries/GetLogin";
import { useDispatch } from 'react-redux';
import { LOGIN } from "../redux/slices/loginSlice";
import { useNavigate , Link} from "react-router-dom";
export const Login = () => {
    const [mail , setMail] = useState('');
    const [pass , setPass] = useState('');
    const [isRed , setIsRed] = useState(false);
    const [loading ,setLoading] = useState(false);
    const dispatcher = useDispatch();
    const navigator = useNavigate();
    const setData = async() =>{
        if(loading) return ; 
        try{
            setLoading(true);
            const {data} = await GetLogin(mail , pass);
            if(data.token){
                dispatcher(LOGIN({
                    mail , 
                    pass,
                    token : data.token
                }));
                const token = data.token;
                const user = {mail , pass , token};
                window.localStorage.setItem('user' , JSON.stringify(user));
                setLoading(false);
                navigator(-1);
            }
        }catch(err){
            setLoading(false);
            if(err.response.status===400){
                setMail('');
                setPass('') ; 
                setIsRed(true);
            }
            else if(err.response.status===0){
                alert('check internet connection')
            }
        }
    };
    return (
        <div className="m-auto" style={{ width: 500 }}>
            <Row className="justify-content-center mt-4">
                <Link to={'/'}><Col md={8} className={''}><Logo /></Col></Link>
                <div className="mt-4 rounded-3 p-5" style={{ backgroundColor: '#222327' }}>
                    <h1 style={{ fontSize: 22 }} className="text-white mb-4">ورود از طریق ایمیل</h1>
                    <p style={{ fontSize: 14 }} className={` mb-5 ${isRed ? 'text-danger' : 'text-muted text-white'}`}>{isRed ? "ایمیل یا رمز عبور وارد شده اشتباه است" : "لطفا ایمیل و رمز عبور خود را وارد کنید"}</p>
                    <Input style={{ backgroundColor: '#37383e' }} value={mail} onChange={(e)=>setMail(e.target.value)} className={`text-white p-3 mb-5 ${isRed ? 'border border-danger' : ""}`} type="text" placeholder="ایمیل" />
                    <Input style={{ backgroundColor: '#37383e' }} value={pass} onChange={(e)=>setPass(e.target.value)} className={`text-white p-3 mb-5 ${isRed ? 'border border-danger' : ""}`} type="password" placeholder="رمز عبور" />
                    <div className="text-center text-white bg-primary rounded-3" onClick={setData} style={{ fontSize: 13, padding: 15 , cursor : "pointer" }}>{loading ? "در حال ورود ..." : "ورود"}</div>
                </div>
            </Row>
        </div>
    )
};