import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import github from "../attachments/github.png";
import linkedin from "../attachments/linkedin.png"
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Container fluid className="bg-dark vh-100 px-0 d-flex flex-column justify-content-end" id="contact">
            <ContactForm></ContactForm>
            <Row className='bg-success h-25 d-flex justify-content-evenly align-items-center border-top border-2 border-warning mx-0'>
                <Col xs="2" md="1" className='contact-link'>
                    <a href="https://www.linkedin.com/in/jonathan-rotstejn-0534a4177/" target="_blank" rel="noreferrer" className='link-dark'>
                        <Image fluid src={linkedin} />
                    </a>
                </Col>
                <Col xs="2" md="1" className='contact-link'>
                    <a href="https://github.com/jrotstejn/" target="_blank" rel="noreferrer" className='link-dark'>
                        <Image fluid src={github} />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;