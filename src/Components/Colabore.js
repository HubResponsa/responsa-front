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
                    Ajude o Responsa a se preparar para o futuro retorno às aulas presenciais!
                </p>
                <p className="section-text">
                    Caso queira colaborar, use o email abaixo como chave para o pagamento no PIX. Todo o dinheiro
                    arrecadado será destinado para a alimentação dos alunos quando voltarmos a dar aula presencialmente.
                </p>
                <p className="section-text">
                    <a href="#">
                        cursinhoresponsa@gmail.com
                    </a>
                </p>
                <p className="section-text">
                    A Arrecadação de computadores do Responsa é um projeto destinado aos alunos 
                    do cursinho sem condições financeiras para os materiais que o Ensino a Distância 
                    exige. Desse modo, todos os computadores arrecadados são destinados aos alunos 
                    matriculados que manifestaram dificuldade quanto ao acesso às aulas e materiais virtuais.
                    Para participar dessa ação, entre em contato com o Cursinho Popular Responsa, através 
                    de email ou redes sociais listados abaixo.
                </p>
                <p className="section-subtitle">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn2kOQxXWMMVVTy83Hv9zCob7Qo7IkKFzqbXJ2JB8_NXA7yw/viewform">
                        Formulário para doação de computadores
                    </a>
                </p>
            </Card.Body>
        </Card>
    )
}
export default Colabore