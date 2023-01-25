import { Col } from 'react-bootstrap';
import cv from "../attachments/CV - Jonathan Rotstejn.pdf";

const Bio = () => {
    return (
        <Col xs="11" lg="5">
            <h2 className='text-warning text-center mb-0 '>Bio</h2>
            <p className='text-dark text-center pe-lg-5 pt-lg-5 fs-6 fs-5 mb-1 fw-bold'> I'm a 31 year old self taught Front End Developer who is switching carreers.
                As a Retail Manager I have a lot of experience in working in team and following company procedures.<br /><br />
                But of course I also have a good technical skill set. I have a strong understanding of HTML, CSS, JavaScript and love to
                discover new libraries or frameworks that help me code responsive projects in a organized and efficient way.<br /><br />
                <a href={cv} target="_blank" rel="noreferrer" className='fs-5 fw-bold text-dark cv-link'>Open My Resume</a>
            </p>
        </Col>
    )
}

export default Bio;
