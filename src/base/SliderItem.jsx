import {GetMore} from "../queries/GetMore";
import {useState} from "react";
import {Mic, Imdb, Hit, Sub} from "./Logo";
import {Link} from "react-router-dom";
export const SliderItem = ({element, data}) => {
    const [moreData, setMoreData] = useState({})
    const mouse = async (id) => {
        if (id) {
            try {
                const more = await GetMore(id);
                setMoreData(more.data.result);
            } catch (err) {
                console.log(err);
            }
        }

    }


    return (

        <Link style={{textDecoration : 'none'}} to={`/single-movie/${element.id}/${element.type}`}>
            <div className={'position-relative '} onMouseOver={mouse.bind(this, element.id)}>
                <img className={'rounded-2 w-100 position-relative'}
                     src={ element.imageUrl || element.seriesImageUrl ? `https://static.namava.ir${element.imageUrl || element.seriesImageUrl}` : element.image_url} alt=""/>
                <div className={'hover start-0 top-0'}>
                    <ul className={`${data ? 'd-none' : ''} d-flex flex-column p-4 justify-content-end h-100 text-white gap-3`}>
                        <li>{`${element.type === 'Series' ? 'سریال' : 'فیلم'} - ${moreData.year || ""} `}</li>
                        <li className={(moreData.hit) ? '' : 'd-none'}><Hit/> {moreData.hit + '%'} </li>
                        <li className={(moreData.imdb !== null) ? '' : 'd-none'}><Imdb/> {moreData.imdb}</li>
                        <li className={(moreData.hasPersianSubtitle && moreData.dubsType === 'None') ? '' : 'd-none'}>
                            <Sub/> {'زیرنویس'}</li>
                        <li className={(moreData.dubsType === 'None') ? 'd-none' : ''}><Mic/> {'دوبله'}</li>
                    </ul>
                </div>
            </div>
            <h6 className={'text-white mt-3 caption'}>{element.caption || element.name}</h6>
        </Link>
    )
};