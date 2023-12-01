import { Container, Image, Navbar, Nav, Button } from "react-bootstrap";
import logoimage from '../assets/bg/logo.png';
const Navigation = () => {
    return ( 
        <>
            <div>
                <Navbar>
                    <Container>
                        <Navbar.Brand><Image src={logoimage} style={{ height: "96px" }}/></Navbar.Brand>
                        <Nav className="mx-auto nav-underline navi-text">
                            <Nav.Link href="#design" className="me-2 fw-semibold">Design</Nav.Link>
                            <Nav.Link href="#branding" className="me-3 fw-semibold">Branding</Nav.Link>
                            <Button className="btn btn-dark btn-md rounded-5 me-4">Menu</Button>
                        </Nav>
                        <Nav.Link className="fw-semibold navi-text link-underline" href="#">Let's Talk</Nav.Link>
                    </Container>
                </Navbar>
            </div>
        </>
     );
}
 
export default Navigation;