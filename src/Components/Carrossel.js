import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/carrousel-1.jpg'
import image2 from '../images/carrousel-2.jpg'
import image3 from '../images/carrousel-3.jpg'
import image4 from '../images/carrousel-4.jpg'
import image5 from '../images/carrousel-5.jpg'

function Carrossel()
{
    return(
        <Carousel id="component">
            <Carousel.Item interval={2000}>
                <img
                alt="carrousel 1"
                className="d-block w-100"
                src={image1}
                id="image-carrossel"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                alt="carrousel 2"
                className="d-block w-100"
                src={image2}
                id="image-carrossel"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                alt="carrousel 3"
                className="d-block w-100"
                src={image3}
                id="image-carrossel"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                alt="carrousel 4"
                className="d-block w-100"
                src={image4}
                id="image-carrossel"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                alt="carrousel 5"
                className="d-block w-100"
                src={image5}
                id="image-carrossel"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Carrossel