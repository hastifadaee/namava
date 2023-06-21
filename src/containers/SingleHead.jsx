import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Hit, Imdb, Mic, Sub } from "../base/Logo";
export const SingleHead = () => {
    const { story, coverLandscape, logoImageUrl, caption, year, hit, shortDescription, teaserText, casts, mediaDuration, imdb, hasPersianDub, hasPersianSubtitle, type, id } = useSelector(state => state.app);
    return (
        <Container fluid={true}>
            <Row className={'faded'} style={{ backgroundSize: "contain",backgroundRepeat : "no-repeat" , backgroundImage: `linear-gradient(rgba(18, 18, 18, 0) 10vw, rgb(18, 18, 18) 46.875vw), linear-gradient(to left, rgba(18, 18, 18, 0.7), rgba(18, 18, 18, 0) 50%),url(https://static.namava.ir${coverLandscape})`, minHeight: '47vw' }}>
                <Col>
                    <div className={'d-flex flex-column gap-3 h-100 mt-5 me-4 '}>
                        <div className={'w-20 mt-5 mb-3'}><img style={{ maxHeight: '15vh', maxWidth: '20vw' }} src={`https://static.namava.ir${logoImageUrl}`} alt="" /></div>
                        <div style={{ color: 'white' }}><strong>{caption}</strong></div>
                        <ul style={{ color: 'white' }} className={'d-flex gap-3 align-items-center'}>
                            {year ? <li style={{ fontSize: 11 }}>{year}</li> : ""}
                            {hit ? <li style={{ fontSize: 11 }}><Hit /> {hit}%</li> : ""}
                            {mediaDuration ? <li style={{ fontSize: 11 }}>{mediaDuration}دقیقه </li> : ''}
                            {imdb ? <li style={{ fontSize: 11 }}><Imdb /> {imdb}</li> : ''}
                            {hasPersianDub ? <li style={{ fontSize: 11 }}><Mic /> دوبله</li> : ''}
                            {hasPersianSubtitle ? <li style={{ fontSize: 11 }}><Sub /> زیرنویس</li> : ''}

                        </ul>
                        <div style={{ color: 'white', width: '40%', fontSize: 13 }} >{shortDescription || story}</div>
                        {
                            type === 'Movie' ?
                                (
                                <Link style={{ textDecoration: 'none' }} to={`/player/${id}`}><div className={'text-center p-2 rounded-2 play'} style={{ width: '100px' }}>پخش فیلم</div></Link>
                                ) :
                                ''

                        }
                        <div style={{ color: 'white' }}>{teaserText}</div>
                        <div style={{ color: 'white' }} className={'d-flex gap-3'}>
                            <p className={'text-muted'} style={{ fontSize: 13 }}> ستارگان : </p>
                            {
                                casts.map((elem, index) => {
                                    if (index < 3) {
                                        return (
                                            <p key={index} className={'text-muted'} style={{ fontSize: 13 }}> {elem.castName} </p>
                                        )
                                    }
                                    else {
                                        return ''
                                    }
                                })
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}