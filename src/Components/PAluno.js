import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/PAluno.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function PAluno()
{
    return(
        <Accordion>
            <Card id="PAluno">
                <Card.Header id="textPAluno">
                
                </Card.Header>
                <Card.Body id="textBody"></Card.Body>
            </Card>
        </Accordion>
    )
}
export default PAluno