import {Container} from "reactstrap";
import {useEffect, useState} from "react";
import {GetAll} from "../queries/GetAll";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Navigation} from "swiper";
import "swiper/css/navigation";
import {SliderItem} from "./SliderItem";

export const Sliders = (props) => {
    const loadingArr = Array(10).fill(<div className={'loading'}></div>);
    const [sliders, setSliders] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        getNew();
    }, [props.url])
    const getNew = async () => {
        try {
            const data = await GetAll(props.url);
            setSliders(!props.single ? data.data.result : data.data.result.items);
            setLoading(false);
        }catch (err){
            console.log(err)
        }
    };
    return (
        <Container fluid={true} className={'mb-5 p-0'}>
            <h4 className={'text-white mb-4 me-5 title'}>{props.title}</h4>
            <Swiper
                spaceBetween={20}
                breakpoints={
                    {
                        600 : {
                            slidesPerView : 5,
                            slidesPerGroup : 4
                        },
                        900 : {
                            slidesPerView : 6 ,
                            slidesPerGroup : 5
                        },
                        1200 : {
                            slidesPerView : 7 ,
                            slidesPerGroup : 6
                        },
                        1500 : {
                            slidesPerView : 9 ,
                            slidesPerGroup : 8
                        }
                    }
                }
                slidesPerView={2.5}
                slidesPerGroup={4}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    !loading ?
                        sliders.map((element,index) => {
                            return (
                                <SwiperSlide key={index} className={!index ? 'me-4' : ''}>
                                    <SliderItem element={element} data={props.hasData}></SliderItem>
                                </SwiperSlide>
                            )
                        })
                        : (
                            loadingArr.map((elem , index)=>{
                                return(
                                    <SwiperSlide key={index} className={!index ? 'me-5' : ''}>
                                        {
                                            elem
                                        }
                                    </SwiperSlide>
                                )
                            })
                    )

                }
            </Swiper>
        </Container>
    )
};