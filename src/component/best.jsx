import { Container, Col, Image } from "react-bootstrap";
import designimage from '../assets/bg/design.png';
const BestDo = () => {
    return ( 
        <>
            <div>
                <Container>
                    <br/>
                    <p className="d-flex justify-content-center fw-semibold" id="design">What we do best</p>
                    <h1 className="d-flex justify-content-center fw-bold">Web Design</h1>
                    <Col className="container col-6">
                        <p className="text-center">We’re pretty sure everyone wants higher conversion rates and better recognition. Don’t worry, we got you covered!</p>
                    </Col>
                    <Image src={designimage} className="container d-flex justify-content-center align-items-center"/>
                </Container>
            </div>
        </>
     );
}
 
export default BestDo;