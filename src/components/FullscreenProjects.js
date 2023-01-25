import Carousel from 'react-bootstrap/Carousel';
import runapp from '../attachments/runapp.jpg'
import portfolio from '../attachments/portfolio.jpg'
import findtvshow from '../attachments/findtvshow.jpg'

function FullscreenProjects() {
  return (
    <Carousel variant="dark" className='vh-100 bg-success align-items-center fullscreen'>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto border border-dark border-3 project-image"
          src={runapp}
          alt="RunApp"
        />
        <Carousel.Caption className='mx-5 d-flex justify-content-center'>
          <a href="https://jrotstejn.github.io/runapp" target="_blank" rel="noreferrer" className='link-dark project-link'>
            <h3 className='bg-warning border border-dark border-3 px-4 py-2 mx-2'>Visit Website</h3>
          </a>
          <a href="https://github.com/jrotstejn/runapp" target="_blank" rel="noreferrer" className='link-dark project-link'>
            <h3 className='bg-warning border border-dark border-3 px-4 py-2 mx-2'>Visit GitHub</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto border border-dark border-3 project-image"
          src={findtvshow}
          alt="Find TV Show"
        />

        <Carousel.Caption className='mx-5 d-flex justify-content-center'>
          <a href="https://jrotstejn.github.io/findtvshow" target="_blank" rel="noreferrer" className='link-dark project-link'>
            <h3 className='bg-warning border border-dark border-3 px-4 py-2 mx-2'>Visit Website</h3>
          </a>
          <a href="https://github.com/jrotstejn/findtvshow" target="_blank" rel="noreferrer" className='link-dark project-link'>
            <h3 className='bg-warning border border-dark border-3 px-4 py-2 mx-2'>Visit GitHub</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto border border-dark border-3 project-image"
          src={portfolio}
          alt="Portfolio"
        />

        <Carousel.Caption className='mx-5 d-flex justify-content-center'>
          <a href="https://jrotstejn.github.io/portfolio" target="_blank" rel="noreferrer" className='link-dark project-link'>
            <h3 className='bg-warning border border-dark border-3 px-4 py-2 mx-2'>Visit Website</h3>
          </a>
          <a href="https://github.com/jrotstejn/portfolio" target="_blank" rel="noreferrer" className='link-dark project-link'>
            <h3 className='bg-warning border border-dark border-3 px-4 py-2 mx-2'>Visit GitHub</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FullscreenProjects;