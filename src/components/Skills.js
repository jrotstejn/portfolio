import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import star from "../attachments/star.png";

const Skills = () => {
    return (
        <Col xs="11" md="7" lg="5" className='d-block fullscreen flex-column my-4 my-lg-0'>
            <h2 className='text-warning text-center mb-0 '>Skills</h2>
            <Row className='pt-lg-5 mx-0'>
                <Col xs="7">
                    <p className='fs-5 fw-bold my-2 text-dark text-center'>HTML/CSS</p>
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
            </Row>
            <Row className='mx-0'>
                <Col xs="7">
                    <p className='fs-5 fw-bold my-2 text-dark text-center'>JavaScript</p>
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
            </Row>
            <Row className='mx-0'>
                <Col xs="7">
                    <p className='fs-5 fw-bold my-2 text-dark text-center'>Bootstrap</p>
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
            </Row>
            <Row className='mx-0'>
                <Col xs="7">
                    <p className='fs-5 fw-bold my-2 text-dark text-center'>React ( learning )</p>
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
                <Col xs="1" className='px-0'>
                    <Image fluid src={star} alt="star" />
                </Col>
            </Row>
        </Col>

    )
}

export default Skills;