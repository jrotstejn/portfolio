import { Container, Row } from 'react-bootstrap';
import Bio from './Bio';
import Skills from './Skills';

const About = () => {

    return (
        <Container fluid className="d-flex flex-column justify-content-center vh-100 pt-0 pt-md-5 px-0 bg-success" id="about" >
            <Row className="align-items-center justify-content-center h-75 mx-0">
                <Bio></Bio>
                <Skills></Skills>
            </Row>
        </Container>
    )
}

export default About;