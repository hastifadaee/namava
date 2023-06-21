import { useRef, useState } from "react";
import { CaretRightOutlined, FastForwardOutlined, FastBackwardOutlined, PauseOutlined, FullscreenOutlined } from '@ant-design/icons';
import { Slider } from '@mui/material';
import { Timing, changeTime, timeChange } from '../helpers/Timing';
import { useEffect } from "react";
let x = null;
export const Player = () => {
    const myRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [times, setTimes] = useState(0);
    useEffect(() => {
        return () => {
            clearInterval(x);
        }
    }, []);

    const playing = () => {
        if (!isPlaying) {
            myRef.current.play();
            setIsPlaying(true);
            x = setInterval(() => {
                setTimes(Math.round(myRef.current.currentTime));
                if (myRef.current.currentTime === myRef.current.duration) {
                    myRef.current.pause();
                    setIsPlaying(false);
                    clearInterval(x);
                }
            }, 100);
        } else {
            myRef.current.pause();
            setIsPlaying(false);
            clearInterval(x);
        }
    }

    const ward = (back) => {
        if (back) {
            myRef.current.currentTime -= 15;
        } else {
            myRef.current.currentTime += 15;
        }
    };
    const click = (e) => {
        const news = timeChange(e.target.value, myRef.current?.duration);
        setTimes(news);
        myRef.current.currentTime = news
    }
    const full = () => {
        myRef.current.requestFullscreen();
    }
    return (
        <div className=" m-auto border rounded-2 mt-5 vid" style={{ width: '70%', position: 'relative' }}>
            <video onClick={playing} ref={myRef} className="w-100 position-relative rounded-2 d-block" src="http://localhost:3000/test.mp4"></video>
            <div className="w-100 justify-content-between d-flex gap-2 align-items-center flex-row-reverse px-3 rounded-bottom playing" style={{ backgroundColor: 'rgba(0, 0 ,0 , .5)', height: '8%', zIndex: 1000 }}>
                <div onClick={ward.bind(this, true)} style={{ cursor: 'pointer' }}><FastBackwardOutlined className="text-white" /></div>
                <div onClick={playing} style={{ cursor: 'pointer' }}>{isPlaying ? <PauseOutlined className="text-white" /> : <CaretRightOutlined className="text-white" />}</div>
                <div onClick={ward.bind(this, false)} style={{ cursor: 'pointer' }}><FastForwardOutlined className="text-white" /></div>
                <div className="d-flex align-items-center px-2" style={{ width: "70%" }}>
                    <Slider
                        size="small"
                        aria-label="Small"
                        defaultValue={0}
                        value={changeTime(times, myRef.current?.duration || 1)}
                        onChange={click}
                    />
                </div>
                <div><FullscreenOutlined className="text-white" onClick={full} /></div>
                <div style={{ fontSize: 11, width: 100 }} className="text-white">{Timing(times)}</div>
            </div>
        </div>
    )
};