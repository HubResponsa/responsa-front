import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Contato.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function Contato()
{
    return(
        <Accordion>
            <Card id="Contato">
                <Card.Body id="textBody">
                    Contato    
                </Card.Body>
            </Card>
        </Accordion>
    )
}
export default Contato