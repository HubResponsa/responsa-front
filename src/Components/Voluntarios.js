import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Voluntarios.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function Voluntarios()
{
    return(
        <Accordion>
            <Card id="Voluntarios">
                <Card.Body id="textBody">
                    <p id="textVoluntarios">Voluntários</p>
                    <div id="textBody">
                        <p><b>Psicóloga:</b></p>
                            <li>Murieli Narcizo</li> 
                        <br/>
                        
                        <p><b>Professores:</b></p>
                        <div>
                            <ul>
                            <li id="lista">Murieli Narcizo</li> 
                            <li id="lista">Murieli Narcizo</li> 
                            <li id="lista">Murieli Narcizo</li> 
                            <li id="lista">Murieli Narcizo</li> 
                            </ul>
                        </div>
                    </div>
                   
        </Card.Body>
            </Card>
        </Accordion>
    )
}
export default Voluntarios