import { Container } from "reactstrap";
import { GetSlider } from "../queries/GetSlider";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Info } from "../base/Logo";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link, useNavigate } from "react-router-dom";

export const SliderTop = () => {
    const [slider, setSlider] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigator = useNavigate();
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        try {
            const data = await GetSlider();
            setSlider(data.data.result);
            setLoading(false);
        }catch (err){
            console.log(err)
        }
    }
    return (
        <Container className={'p-0'} fluid={true}>
            <Swiper
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                loop={true}
                navigation={true}
                effect={"fade"}
                className={'mySwiper'}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
            >
                {
                    loading ?
                        (<div className={'loadingTop'}></div>)
                        :
                        (slider.map((element, index) => {
                            return (
                                <SwiperSlide onClick={()=>navigator(`single-movie/${element.id}/${element.type}`)} key={index} className={'slider d-flex flex-column gap-3 position-relative'} style={{ backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(https://static.namava.ir${element.coverLandscape})` , cursor : "pointer" }}>
                                        <div className={'me-5 mt-4'} style={{ maxWidth: '20%' }}>
                                            <img className={'img-fluid mt-5'} style={{ maxHeight: '100px' }} src={`https://static.namava.ir${element.logoImageUrl}`} alt="" />
                                        </div>
                                        <div className="me-5 w-25 text-white mt-2 font-weight-bold" style={{ fontSize: '18px' }}>{element.caption}</div>
                                        <div className="me-5 text-white mt-2" style={{ fontSize: '13px', width: '40%' }}>{element.shortDescription || element.story}</div>
                                        {
                                            element.teaserText ?
                                                <div className="me-5 w-25 text-white mt-2" style={{ fontSize: '13px' }}>{element.teaserText}</div>
                                                :
                                                ''
                                        }
                                        <Link style={{ textDecoration: 'none' }} to={`single-movie/${element.id}/${element.type}`}><div className=" me-5 info" style={{ fontSize: 12 }}><Info /> توضیحات بیشتر</div></Link>
                                        <div style={{ color: 'white', height: '10px' }} className={'d-flex gap-3 me-5 w-25 text-white mt-2'}>
                                            <p className={'text-muted'} style={{ fontSize: 11 }}> ستارگان : </p>
                                            {
                                                element.casts.map((elem, ind) => {
                                                    if (ind < 3) {
                                                        return (
                                                            <p key={ind} className={'text-muted'} style={{ fontSize: 11 }}> {elem.castName}</p>
                                                        )
                                                    }
                                                    else {
                                                        return ''
                                                    }
                                                })
                                            }
                                        </div>
                                </SwiperSlide>
                            )
                        }))
                }
            </Swiper>
        </Container >
    )
}
