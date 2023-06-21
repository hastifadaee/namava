import {Row, Col, Container} from "reactstrap";
import {Logo  , Search} from "../base/Logo";
import {Link, useNavigate} from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux';
import { LOGOUT } from "../redux/slices/loginSlice";
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = ()=>{
    const {mail} =useSelector(state => state.login);
    const dispatcher = useDispatch();
    const navigator = useNavigate();
    const click  =()=>{
        if(mail){
            dispatcher(LOGOUT());
            window.localStorage.clear();
        }else{
            navigator('/login')
        }
    }
    return(
        <Container fluid className={'p-0 py-2 header w-100 mb-3 d-none d-md-block'}>
            <Row className={'justify-content-between w-100 p-0'}>
                <Col xs={10} lg={6}>
                    <ul className={'me-5 d-flex w-100 gap-4 align-items-center nav'}>
                        <Link style={{textDecoration : 'none'}} to={'/'}><li><Logo/></li></Link>
                        <Link style={{textDecoration : 'none'}} to={'/'}><li>خانه</li></Link>
                        <li>فیلم ها</li>
                        <li>سریال ها</li>
                        <li>دسته بندی</li>
                        <li>تازه ها</li>
                        <li>کودکان</li>
                        <li>نماوا مگ</li>
                    </ul>
                </Col>
                <Col xs={2} className={'d-flex flex-row gap-2'}>
                    <Link style={{textDecoration : 'none'}} to={'/search'}><div className={'py-1'}><Search/></div></Link>    
                    <div style={{cursor : "pointer" }} className={'w-100 rounded-2 border border-white text-center p-2 btnEn'} onClick={click}>{
                        mail ? <div><LogoutIcon/> {mail}</div> : 'ورود / ثبت نام'}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}