import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

function Funcionamento()
{
    return(
        <Card id="Funcionamento">
            <Card.Body className="section-card">
                    <p className="section-title">Funcionamento</p>
                    <p className="section-text">
                        Em situação normal, e presencial, nossas aulas eram aos sábados, 
                        das 9h às 17h, com um intervalo de almoço das 11:50 ao 12:40. As aulas eram realizadas na 
                        EMEF/EJA Padre Leão Vallerie, no bairro Campo Grande, Campinas. 
                        Nossas aulas nesse período serão online, devido a pandemia, e funcionarão aos sábados, 
                        das 8:00 às 17:10, com intervalos das 9:40 às 10:00 e das 15:10 às 15:30, além do horário 
                        de almoço, das 11:40 às 13:30. Uma vez a cada 3 semanas, teremos uma aula de atualidades, 
                        das 17:10 às 18:00, para manter os alunos sempre informados sobre o que acontece no mundo e 
                        no nosso país. 
                        As plataformas que utilizaremos serão Google Classroom, para transmitir informações e 
                        atividades, e Google Meet, para aulas ao vivo.
                    </p>
                    
                    <Table striped bordered hover size="sm" id="schedule-table">
                        <thead>
                            <tr>
                                <th>Horário</th>
                                <th>Matéria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>08:00-08:50</td>
                                <td>Português</td>
                            </tr>
                            <tr>
                                <td>08:50-09:40</td>
                                <td>Português</td>
                            </tr>
                            <tr>
                                <td>10:00-10:50</td>
                                <td>Matemática</td>
                            </tr>
                            <tr>
                                <td>10:50-11:40</td>
                                <td>Matemática</td>
                            </tr>
                            <tr>
                                <td>13:30-14:20</td>
                                <td>Física</td>
                            </tr>
                            <tr>
                                <td>14:20-15:10</td>
                                <td>Biologia</td>
                            </tr>
                            <tr>
                                <td>15:30-16:20</td>
                                <td>Química</td>
                            </tr>
                            <tr>
                                <td>16:20-17:10</td>
                                <td>Geografia/História</td>
                            </tr>
                            <tr>
                                <td>17:10-18:00</td>
                                <td>Atualidades</td>
                            </tr> 
                        </tbody>
                    </Table>
            </Card.Body>
        </Card>
    )
}
export default Funcionamento