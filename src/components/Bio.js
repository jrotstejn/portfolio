import Col from 'react-bootstrap/Col';
import cv from "../attachments/CV - Jonathan Rotstejn.pdf";

const Bio = () => {
    return (
        <Col xs="11" lg="5">
            <h2 className='text-warning text-center my-5 my-md-2'>Bio</h2>
            <p className='text-dark pe-lg-5 pt-lg-5 fs-6 fs-5 mb-1 fw-bold'> 
                Hi, I'm Jonathan, a Junior Front End Developer who is looking for a first professional coding opportunity.
                I can create fully functional websites or applications with the use of HTML, CSS, JavaScript and some frameworks!
                <br /> <br />
                Because of my unconventional background I have a lot of experience with Team Collaboration and have a good understanding
                of what positive Leadership stands for. On top of that I´m a lifelong learner who always wants to learn the newest
                technologies and is open for new challenges!
                <br /> <br /> 
            </p>
            <p className='text-dark text-center fs-5 my-4 my-md-1 fw-bold'> 
            <a href={cv} target="_blank" rel="noreferrer" className='fs-5 fw-bold text-dark cv-link'>Click here to open my Resume</a>
            </p>
        </Col>
    )
}

export default Bio;
