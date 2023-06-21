import { SliderTop } from "../containers/SliderTop";
import { Sliders } from "../base/Sliders";
import { Header } from "../containers/Header";
export const Home = () => {
    return (
        <>
            <Header/>
            <SliderTop />
            <Sliders url={'https://www.namava.ir/api/v1.0/post-groups/1263/medias?pi=1&ps=20'} title={'ویژه'}></Sliders>
            <Sliders url={'https://www.namava.ir/api/v1.0/medias/exclusive-content/1434/?pi=1&ps=20'} title={'سریال هاس اختصاصی نماوا'} ></Sliders>
            <Sliders url={'https://www.namava.ir/api/v1.0/medias/latest?pi=1&ps=20'} title={'تازه های نماوا'} ></Sliders>
            <Sliders url={'https://www.namava.ir/api/v1.0/post-groups/1368/medias?pi=1&ps=20'} title={'تازه های ایرانی'} ></Sliders>
            <Sliders url={'https://www.namava.ir/api/v1.0/medias/exclusive-dubs?pi=1&ps=20'} title={'دوبله های نماوا'} ></Sliders>
        </>

    )
}