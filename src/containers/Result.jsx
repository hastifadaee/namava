import { Col } from "reactstrap";
import { SliderItem } from '../base/SliderItem';

export const Result = ({ data }) => {
    return (
        data.map((element) => {
            return (
                <Col md={2} key={element.id} className={'mt-5'}>
                    <SliderItem element={element} />
                </Col>
            )
        })

    )
};