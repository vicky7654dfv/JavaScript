import Carousel from 'react-bootstrap/Carousel';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img4 from './images/img4.jpg'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{height:'90vh'}} className='d-block w-100' src={img1} alt='"First slide'></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}} className='d-block w-100' src={img2} alt='"Secondslide'></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height:'90vh'}} className='d-block w-100' src={img4} alt='"Third slide'></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;