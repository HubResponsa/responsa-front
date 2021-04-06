import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Contato.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function Contato()
{
    return(
        <Accordion>
            <Card id="Contato">
                <Card.Header id="textContato">
                
                </Card.Header>
                <Card.Body id="textBody"></Card.Body>
            </Card>
        </Accordion>
    )
}
export default Contato