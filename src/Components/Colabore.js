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
                    Ajude o Responsa a se preparar para o futuro retorno às aulas presenciais e 
                    auxiliar nossos alunos com materiais!
                </p>
                <p className="section-text">
                    Acessando o link da vakinha, é possível doar qualquer quantia a partir de 25 
                    reais que será destinado para a alimentação dos alunos, infraestrutura de sala 
                    de aula, materiais escolares e despesas do cursinho.
                    
                </p>
                <p className="section-text">
                    <i> Link da vakinha estará disponível em breve </i>
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
                    <a className="section-text" href="https://docs.google.com/forms/d/e/1FAIpQLSdn2kOQxXWMMVVTy83Hv9zCob7Qo7IkKFzqbXJ2JB8_NXA7yw/viewform">
                        Formulário para doação de computadores
                    </a>
                </p>
            </Card.Body>
        </Card>
    )
}
export default Colabore