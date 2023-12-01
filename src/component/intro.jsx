import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
const Herotext = () => {
    return ( 
        <>
            <div className="intro">
                <Container className="d-flex justify-content-center align-items-center">
                    <Row>
                        <Col className="container col-6">
                            <h1 className="text-center fw-bold aloha-text" style={{ fontSize: "110px" }}>3DB</h1>
                            <p className="text-center fw-semibold paragraf">Got an awesome idea? You’re halfway there! Now let us make a fully functioning product out of it.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
     );
}
 
export default Herotext;