import 'swiper/css';
import "swiper/css/navigation";
import castSvg from "../assets/data/castSvg";

export const SliderCast = ({ element }) => {
    if (element.castRole === 'Actor') {
        return (
            <div>
                {
                    element.castImageUrl !== '' && element.castImageUrl !== null ? (
                        <div><img style={{aspectRatio : "1/1"}} className={'w-100 rounded-circle'} src={`https://static.namava.ir${element.castImageUrl}`}
                            alt="" />
                        </div>
                        )
                        :
                        <img
                            className={'w-100'}
                            src={castSvg}
                            alt=""
                        />
                }
                <h2 className={'text-center text-white mt-2'} style={{ fontSize: 14 }}>{element.castName}</h2>
                <p className={'text-center text-white text-muted'} style={{ fontSize: 16 }}>بازیگر</p>
            </div>
        )
    }
};