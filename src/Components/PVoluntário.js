import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/PVoluntario.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function PVoluntario()
{
    return(
        <Accordion>
            <Card id="PVoluntario">
                <Card.Header id="textPVoluntario">
                
                </Card.Header>
                <Card.Body id="textBody"></Card.Body>
            </Card>
        </Accordion>
    )
}
export default PVoluntario