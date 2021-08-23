import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import Card from 'react-bootstrap/Card'

function Colabore()
{
    return(
        <Card id="Colabore">
            <Card.Body className="section-card">
                <p className="section-title">Colabore</p>
                <p className="section-text">
                    Ajude o Responsa a custear cestas básicas e inscrições dos alunos nos vestibulinhos!
                </p>
                <p className="section-text">
                    Caso queira colaborar, use o email abaixo como chave para o pagamento no PIX. Todo o dinheiro
                    arrecadado será destinado para a alimentação dos alunos quando voltarmos a dar aula presencialmente.
                </p>
                <p className="section-text">
                    { /* eslint-disable-next-line */ }
                    <a href="#">
                        responsacursinho@gmail.com
                    </a>
                </p>
                <p className="section-text">
                    Estamos realizando também uma campanha de arrecadação no <a href="https://benfeitoria.com">benfeitoria</a>,  
                    use o link abaixo caso queira ajudar. A campanha ficará de pé até o dia 21/09, então corre lá!
                </p>
                <p className="section-subtitle">
                    <a href="https://benfeitoria.com/arrecadacaocursinhoresponsa">
                        campanha de arrecadação
                    </a>
                </p>
            </Card.Body>
        </Card>
    )
}
export default Colabore