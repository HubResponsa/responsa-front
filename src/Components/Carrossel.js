import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Carrossel.css'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/carrossel1.jpg'
import image2 from '../images/carrossel2..jpeg'
import image3 from '../images/carrossel3.jpg'

function Carrossel()
{
    return(
        <div id="carrossel">
           <Carousel id="component">
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                id="imageCarrossel"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                id="imageCarrossel"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                id="imageCarrossel"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Carrossel