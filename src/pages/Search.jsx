import React, {useState} from "react";
import {Container, Row} from "reactstrap";
import {GetSearch} from '../queries/GetSearch';
import {UnResult} from '../containers/UnResult';
import {Result} from '../containers/Result';
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import {Header} from '../containers/Header';

let x = null;
let firstTime = false ; 
const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 50,
            color: '#2e93e6'
        }}
        spin
    />
);
export const Search = () => {
    const [values, setValues] = useState('');
    const [datas, setDatas] = useState([]);
    const [loading, setLoaing] = useState(true);
    const changes = (e) => {
        setValues(e.target.value);
        clearTimeout(x);
        if (!e.target.value.length){
            setDatas([]) ;
            return
        }
        x = setTimeout(async () => {
            setLoaing(true);
            const data = await GetSearch(e.target.value, true);
            if(data.data.result.result_items[0].groups){
                setDatas(data.data.result.result_items[0].groups.Media.items);
                firstTime = false ;
            }else{
                setDatas([]);
            }
            setLoaing(false);
        }, 1000);
    }
    window.onscroll = async () => {
        console.log('aa')
        if (!firstTime && Math.round(document.body.getBoundingClientRect().bottom) <= window.innerHeight) {
            console.log('raft')
            const news = await GetSearch(values, false);
            setDatas(news.data.result.result_items[0].groups.Media.items);
            firstTime = true;
        }
    } ;
    return (
        <>
        <Header/>
        <Container>
            <Row className="mt-5">
                <input className="rounded-3 form-control input p-3 text-black mt-3" value={values} style={{ fontSize: 13 }} onChange={changes} placeholder="فیلم سریال بازیگر ژانر" />
                {
                    !values.length ?
                        <UnResult />
                        : (
                            loading === true ?
                                (<div className="d-flex justify-content-center align-items-center mt-5" style={{ width: '100wv' }}><Spin indicator={antIcon} /></div>)
                                :
                                <Result data={datas} />

                        )
                }

            </Row>
        </Container>
        </>
    )
};