import {Container, Row} from "reactstrap";
import {useSelector} from "react-redux";
import {SliderCast} from "../base/SliderCast";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import {Sliders} from "../base/Sliders";
import { useParams } from "react-router-dom";

export const SingleEnd = () => {
    const {casts , caption , type} = useSelector(state => state.app);
    const {id} = useParams();
    return (
        <>
            <Container fluid={true} className={'my-5 px-5'}>
                <Row>
                    <h3 className={'text-white mb-5'} style={{fontSize : 18}}>بازیگران {type === 'Movie' ? 'فیلم' : 'سریال'} {caption}</h3>
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
                        slidesPerView={2}
                        slidesPerGroup={1}
                        loopFillGroupWithBlank= {true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            casts.map((element, index) => {
                                return (
                                    <SwiperSlide key={index}><SliderCast element={element}/></SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Row>
            </Container>
            <Sliders url={`https://www.namava.ir/api/v1.0/medias/${id}/recommend-items-anonymous-user?pi=1&ps=20&iskid=false`} single={true} title={`بر اساس ${caption}`} ></Sliders>
        </>
    )
};
