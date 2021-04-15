import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Voluntarios.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from  'react-bootstrap/ListGroup'

function Voluntarios()
{
    return(
        <Accordion>
            <Card id="Voluntarios">
                <Card.Body id="textBody">
                    <p id="textVoluntarios">Voluntários</p>
                    <br/>
                    <div id="lista">
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">Amanda Teófilo Domingues</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Isabela Eun Hae Yang</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Heloisa Nogueira Marques</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">Ana Clara Sampaio Pires</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Isabela Sandroni Quaresma da Silva</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Luís Eduardo Harada</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista"> Ana Paula Pedronetti de Godoy</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Ivan Saavedra</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Manuela Queiroz</ListGroup.Item>
                        
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">André Luiz Namias Vicente</ListGroup.Item>
                        <ListGroup.Item id="itemLista">João Victor de Oliveira Murer</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Maria Vitória Hozana</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                    <ListGroup.Item id="itemLista">André Pizzirani</ListGroup.Item>
                        <ListGroup.Item id="itemLista">João Vitor Lourenço de Oliveira</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Murilo Yutaka Kushi</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">Antonio Carlos Ferreira Maximo (redes sociais)</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Julia Campoli Sacco</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Pietra Giulia de Oliveira Murer</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">Eduarda Gabrielly Silva</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Kauã Jocarelli Pongiluppe</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Pietra Puglia Nuti</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">Fernando Sotero de Lara</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Lays Barreira Garcia</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Rafaela Carolina dos Anjos Schmidt</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">Gustavo Ferreira Gitzel</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Lívia Maria Rosa Brandão</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Rafaela Daroz Mondelli</ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item id="itemLista">Gabriel Luiz Adriao Portela de Oliveira</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Lorenza Vitoria Martins de Oliveira</ListGroup.Item>
                        <ListGroup.Item id="itemLista">Vitor Gabriel Marinho Domingues</ListGroup.Item>
                    </ListGroup>
                    </div>
                    <br/>
        </Card.Body>
            </Card>
        </Accordion>
        
    )
}
export default Voluntarios