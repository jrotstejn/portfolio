import Container from "react-bootstrap/Container"
import runapp from '../attachments/runapp.jpg'
import portfolio from '../attachments/portfolio.jpg'
import findtvshow from '../attachments/findtvshow.jpg'

const MobileProjects = () => {
    return (
        <Container fluid variant="dark" id="slider" className='vh-100 bg-success mobile flex-column justify-content-center'>
            <h2 className='text-warning text-center mb-5 mb-sm-2'>Projects</h2>
            <a href="https://jrotstejn.github.io/runapp" target="_blank" rel="noreferrer" className="w-75 mx-auto">
                <img
                    className="d-block border border-dark border-3 mb-1 project-image w-100"
                    src={runapp}
                    alt="RunApp"
                />
            </a>
            <a href="https://jrotstejn.github.io/findtvshow" target="_blank" rel="noreferrer" className="w-75 mx-auto">
            <img
                className="d-block border border-dark border-3 mb-1 project-image w-100"
                src={findtvshow}
                alt="Find TV Show"
            />
            </a>
            <a href="https://jrotstejn.github.io/portfolio" target="_blank" rel="noreferrer" className="w-75 mx-auto">
            <img
                className="d-block border border-dark border-3 mb-1 project-image w-100" 
                src={portfolio}
                alt="Portfolio"
            />
            </a >
        </Container >
    );
}

export default MobileProjects;