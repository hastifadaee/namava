import {Container, Row , Col} from "reactstrap";
import {useSelector} from "react-redux";
import {Selects} from "../base/Selects";

export const SingleMiddle = () => {
    const {slideImageList , about , caption , type} = useSelector(state => state.app);
    return (
        <Container fluid={true} className={'px-5'} style={{marginTop : -100}}>
            {
                type === 'Series' ? <Selects/> : ''
            }
            {
                slideImageList.length === 0  ? '' : <h2 className={'text-white me-2'} style={{fontSize : 18}}>تصاویر و جزییات</h2>
            }
            
            <Row>
                {
                    slideImageList.map((element, index) => {
                        return (
                            <Col key={index} xs={4} md={3} lg={2}>
                                <img style={{aspectRatio : "1.8/1"}} key={index} className={'w-100 rounded-2 mt-3'} src={`https://static.namava.ir${element.url}`} alt=""/>
                            </Col>
                        )
                    })
                }
                <h3 className={'my-4 text-white'} style={{fontSize : 18}}>درباره {type === 'Movie' ? 'فیلم' : 'سریال'} {caption}</h3>
                <div className={'text-white text-muted'} style={{fontSize : 13}} dangerouslySetInnerHTML={{__html : about}}></div>
            </Row>
        </Container>
    )
};