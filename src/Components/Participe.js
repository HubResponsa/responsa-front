import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Participe.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function Participe()
{
    return(
        <div>
        <Accordion>
            <Card id="Participe">
            <Card.Body id="textBody">
            <p id="textParticipe">Participe</p>
                    <p id="PAluno">Participe como Aluno</p>
                    <p id="textBody">Em situação normal, e presencial, nossas aulas eram aos sábados, das 9h às 17h, com um intervalo de almoço das 11:50 ao 12:40. As aulas eram realizadas na EMEF/EJA Padre Leão Vallerie, no bairro Campo Grande, Campinas. 
                    Nossas aulas nesse período serão online, devido a pandemia, e funcionarão aos sábados, das 8:00 às 17:10, com intervalos das 9:40 às 10:00 e das 15:10 às 15:30, além do horário de almoço, das 11:40 às 13:30. Uma vez a cada 3 semanas, teremos uma aula de atualidades, das 17:10 às 18:00, para manter os alunos sempre informados sobre o que acontece no mundo e no nosso país. 
                    As plataformas que utilizaremos serão Google Classroom, para transmitir informações e atividades, e Google Meet, para aulas ao vivo.</p>
                    <br/><br/>
                    <p id="PVoluntario">Participe como Voluntário</p>
                    <p id="textBody">Em situação normal, e presencial, nossas aulas eram aos sábados, das 9h às 17h, com um intervalo de almoço das 11:50 ao 12:40. As aulas eram realizadas na EMEF/EJA Padre Leão Vallerie, no bairro Campo Grande, Campinas. 
                    Nossas aulas nesse período serão online, devido a pandemia, e funcionarão aos sábados, das 8:00 às 17:10, com intervalos das 9:40 às 10:00 e das 15:10 às 15:30, além do horário de almoço, das 11:40 às 13:30. Uma vez a cada 3 semanas, teremos uma aula de atualidades, das 17:10 às 18:00, para manter os alunos sempre informados sobre o que acontece no mundo e no nosso país. 
                    As plataformas que utilizaremos serão Google Classroom, para transmitir informações e atividades, e Google Meet, para aulas ao vivo.</p>
        </Card.Body>
            </Card>
        </Accordion>
        </div>    
    )
}
export default Participe