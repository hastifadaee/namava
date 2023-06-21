import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import {useEffect, useState} from "react";
import { Single } from "./pages/Single";
import { Search } from './pages/Search';
import { Player } from './pages/Player';
import { Login } from "./pages/Login";
import { useDispatch , useSelector} from "react-redux";
import { LOGIN } from "./redux/slices/loginSlice";
export const App = () => {
    const [waiting , setWaiting] = useState(true) ;
    const { pathname } = useLocation();
    const dispatcher = useDispatch();
    const {token} = useSelector(state=>state.login);
    const getToken = ()=>{
        let user = window.localStorage.getItem('user');
        user = JSON.parse(user);
        if (user && !token) {
            dispatcher(LOGIN({
                mail: user.mail,
                pass: user.pass,
                token: user.token
            }));
        }
        setWaiting(false);
    }
    useEffect(() => {
        getToken() ;
        window.scrollTo(0, 0);
    }, [pathname]) ;
    console.log(token)
    return (
        <Routes>
            <Route path={'/'} element={<Home />}></Route>
            <Route path={'/single-movie/:id/:wich'} element={<Single />}></Route>
            <Route path={'/search'} element={<Search />}></Route>
            <Route
            path={'/player/:id'} 
            element={token || waiting ? <Player /> : <Navigate to={'/login'}/>}
            />
            <Route
                path={'/login'}
                element={token ? <Navigate to={'/'}/> : <Login />}
            />
        </Routes>
    )
}