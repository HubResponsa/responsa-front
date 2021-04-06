import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Colabore.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'

function Colabore()
{
    return(
        <Accordion>
            <Card id="Colabore">
                <Card.Header id="textColabore">
                Colabore
                </Card.Header>
                <Card.Body id="textBody">Ajude o Responsa a se preparar para o futuro retorno às aulas presenciais e auxiliar nossos alunos com materiais!
Acessando o link da vakinha, é possível doar qualquer quantia a partir de 25 reais que será destinado para a alimentação dos alunos, infraestrutura de sala de aula, materiais escolares e despesas do cursinho.

A Arrecadação de computadores do Responsa é um projeto destinado aos alunos do cursinho sem condições financeiras para os materiais que o Ensino a Distância exige. Desse modo, todos os computadores arrecadados são destinados aos alunos matriculados que manifestaram dificuldade quanto ao acesso às aulas e materiais virtuais.
Para participar dessa ação, entre em contato com o Cursinho Popular Responsa, através de email ou redes sociais listados abaixo.</Card.Body>
            </Card>
        </Accordion>
    )
}
export default Colabore