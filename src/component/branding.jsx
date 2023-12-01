import { Container, Col, Image } from "react-bootstrap";
import developimage from '../assets/bg/develop.png';
const Development = () => {
    return ( 
        <>
            <div>
                <Container>
                <br/>
                    <h1 className="d-flex justify-content-center fw-bold" id="branding">Branding</h1>
                    <Col className="container col-6">
                        <p className="text-center">Sure, every brand is unique. The question is do your customers realize it? We’ll make sure they do.</p>
                    </Col>
                    <Image src={developimage} className="container d-flex justify-content-center align-items-center"/>
                </Container>
            </div>
        </>
     );
}
 
export default Development;