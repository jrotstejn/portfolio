import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import profile from "../attachments/profile.png";

const Intro = () => {
    const toAboutHandler = () => {
        window.location.href = '#about';
    }

    return (
        <Container fluid className="bg-success vh-100 px-0">
            <main className='h-75 d-flex flex-column justify-content-center'>
                <Row className="d-flex justify-content-center pt-5 mx-0">
                    <Col xs="8" md="6" className='d-flex flex-column justify-content-center'>
                        <p className='text-dark fs-1 text-center fw-bold text-decoration-underline'>
                            Jonathan Rotstejn
                        </p>
                        <h3 className='text-warning text-center'>
                            Junior Front End Developer
                        </h3>
                    </Col>
                    <Col xs="3" md="2">
                        <Image rounded className='border border-4 border-dark' fluid src={profile} />
                    </Col>
                </Row>
            </main>
            <div onClick={toAboutHandler} className="d-flex flex-column justify-content-center align-items-center discoverMore bg-dark text-center text-warning h-25 pt-5 border-top border-3 border-warning" >
                <h2 >
                    Discover More About Me!
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffc107" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
            </div>
        </Container>

    )
}


export default Intro;
