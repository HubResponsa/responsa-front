import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/PostsHome.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CardDeck } from 'react-bootstrap';

function Posts()
{
    return(
        <div id="posts">
            <text id="textPosts">Últimos posts</text>
            <br/>
            <CardDeck id="cardDeck">
            <Card style={{ width: '22rem' }} id="cardContent">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }} id="cardContent">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
                </Card>
                <Card style={{ width: '22rem' }} id="cardContent">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}
export default Posts