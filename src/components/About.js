import Row from 'react-bootstrap/Row';
import Bio from './Bio';
import Skills from './Skills';

const About = () => {

    return (
        <main id="about" className="d-flex flex-column justify-content-center vh-100 pt-0 pt-md-5 px-0 bg-success border-bottom border-dark border-2">
            <Row className="align-items-center justify-content-center h-75 mx-0">
                <Bio></Bio>
                <Skills></Skills>
            </Row>
        </main>
    )
}

export default About;