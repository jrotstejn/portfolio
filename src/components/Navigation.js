import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Navbar bg="warning" variant="dark" className="px-md-5 sticky-top bg-opacity-75 border-top border-bottom border-3 border-dark" id="navigation">
            <Nav className="d-flex flex-fill text-center fs-3">
                <Nav.Link className="flex-fill link-dark fw-bold nav-link" href="#about">About</Nav.Link>
                <Nav.Link className="flex-fill link-dark fw-bold nav-link" href="#projects">Projects</Nav.Link>
                <Nav.Link className="flex-fill link-dark fw-bold nav-link" href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default Navigation;