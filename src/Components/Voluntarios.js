import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Voluntarios.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function Voluntarios()
{
    return(
        <Accordion>
            <Card id="Voluntarios">
                <Card.Header id="textVoluntarios">
                Voluntários
                </Card.Header>
                <Card.Body id="textBody">
Psicóloga:
- Murieli Narcizo

Professores:

Química:
- Isabela Sandroni
- Ana Lu
- Izi (prof antigo)
- Ana Clara

Física:
- Aguiar (prof antigo)
- Ariel
- Gitzel

Biologia:
- Isabela Yang
- Pietra Murer
- Fernando Sotero
- Pietra Nuti
- João Victor Murer
- Amanda

Matemática:
- Ivan 
- Ariel
- Rafaela (prof antigo)
- André (prof antigo)

Português:
- João (prof antigo)
- Ana (prof antiga)
- Heloisa
- Rafaela

Redação:
- Julia (prof antigo)
- Duda (prof antigo)

Geografia:
- Lívia
- André (prof antigo)
- Amaral

História:
- André (prof antigo)
- Gustavo (comuna) 
- Amaral

Atualidades:
- Leleu (prof antigo)
- Pietra (prof antigo)
- Murilo
- Amaral</Card.Body>
            </Card>
        </Accordion>
    )
}
export default Voluntarios