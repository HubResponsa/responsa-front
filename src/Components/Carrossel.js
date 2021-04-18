import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Carrossel.css'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'

function Carrossel()
{
    return(
        <div id="carrossel">
           <Carousel id="component">
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image1}
                id="imageCarrossel"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image2}
                id="imageCarrossel"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image3}
                id="imageCarrossel"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Carrossel