import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Contato.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from  'react-bootstrap/ListGroup'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import TwitterIcon from '@material-ui/icons/Twitter'


function Contatos()
{
    return(
        <Accordion>
            <Card id="Contato">
                <Card.Body id="textBody">
                <p id="textContato">Contatos</p>
                    <br/>
                    <div id="listaContatos">
                        <ListGroup horizontal>
                            <ListGroup.Item id="itemLista"><FacebookIcon id="icon"/><a href="https://www.facebook.com/cursinhoresponsa/">Cursinho Responsa</a></ListGroup.Item>
                            <ListGroup.Item id="itemLista"><InstagramIcon id="icon"/><a href="https://www.instagram.com/cursinhoresponsa/">Cursinho Responsa</a></ListGroup.Item>
                        </ListGroup>
                        <ListGroup horizontal>
                            <ListGroup.Item id="itemLista"><TwitterIcon id="icon"/><a href="https://twitter.com/ResponsaPopular">Cursinho Popular Responsa</a></ListGroup.Item>
                            <ListGroup.Item id="itemLista"><AlternateEmailIcon id="icon"/><a href="#">cursinhoresponsa@gmail.com</a></ListGroup.Item>
                        </ListGroup>
                    </div>
                    </Card.Body>
          </Card>
        </Accordion>
    )
}

export default Contatos