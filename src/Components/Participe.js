import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import Card from 'react-bootstrap/Card'

function Participe()
{
    return(
        <div>
            <Card id="Participe">
                <Card.Body className="section-card">
                    <p className="section-title">Participe</p>
                    <p className="section-subtitle">Participe como Aluno</p>
                    <p className="section-text">
                        Em situação normal, e presencial, nossas aulas eram aos sábados, das 9h às 17h, 
                        com um intervalo de almoço das 11:50 ao 12:40. As aulas eram realizadas na EMEF/EJA 
                        Padre Leão Vallerie, no bairro Campo Grande, Campinas. 
                        Nossas aulas nesse período serão online, devido a pandemia, e funcionarão aos sábados, 
                        das 8:00 às 17:10, com intervalos das 9:40 às 10:00 e das 15:10 às 15:30, além do horário 
                        de almoço, das 11:40 às 13:30. Uma vez a cada 3 semanas, teremos uma aula de atualidades, 
                        das 17:10 às 18:00, para manter os alunos sempre informados sobre o que acontece no mundo 
                        e no nosso país. 
                        As plataformas que utilizaremos serão Google classNameroom, para transmitir informações e 
                        atividades, e Google Meet, para aulas ao vivo.
                    </p>
                    <br/>
                    <p className="section-subtitle">Participe como Voluntário</p>
                    <p className="section-text">
                        Em situação normal, e presencial, nossas aulas eram aos sábados, das 9h às 17h, com um 
                        intervalo de almoço das 11:50 ao 12:40. As aulas eram realizadas na EMEF/EJA Padre Leão 
                        Vallerie, no bairro Campo Grande, Campinas. 
                        Nossas aulas nesse período serão online, devido a pandemia, e funcionarão aos sábados, 
                        das 8:00 às 17:10, com intervalos das 9:40 às 10:00 e das 15:10 às 15:30, além do horário 
                        de almoço, das 11:40 às 13:30. Uma vez a cada 3 semanas, teremos uma aula de atualidades, 
                        das 17:10 às 18:00, para manter os alunos sempre informados sobre o que acontece no mundo e 
                        no nosso país. 
                        As plataformas que utilizaremos serão Google classNameroom, para transmitir informações e 
                        atividades, e Google Meet, para aulas ao vivo.
                    </p>
                </Card.Body>
            </Card>
        </div>    
    )
}
export default Participe