import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import { Hit, Downloading } from "./Logo";
import { useSelector } from "react-redux";
export const Episodes = ({ eps }) => {
    const { id } = useSelector(state => state.app);
    return (
        <Row>
            {
                eps.map((element) => {
                    return (
                        <div className={'my-2 epi'} key={element.id}>
                            <Link style={{textDecoration : 'none'}} to={`/player/${id}`}>
                                <div className="w-100 rounded-2"><img style={{aspectRatio : "1.5/1"}} className={'w-100 rounded-2 episode'} src={`https://static.namava.ir${element.imageUrl}`} alt="" /></div>
                                <h3 className={'text-white mt-3'} style={{ fontSize: 14  , lineHeight : '25px'}}>{element.caption}</h3>
                                <div className={'d-flex justify-content-between'}>
                                    <p className={'text-white mt-1'} style={{ fontSize: 13 }}><Hit /> {element.hit}%</p>
                                    <Downloading />
                                </div>
                                <p style={{ fontSize: 12 }} className={'text-muted text-white'}>{element.shortDescription}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </Row>
    )
};