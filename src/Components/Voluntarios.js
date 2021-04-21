import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import Card from 'react-bootstrap/Card'
import { Table } from 'react-bootstrap'

const MEMBERS = [
    "Amanda Teófilo Domingues",
    "Isabela Eun Hae Yang",
    "Heloisa Nogueira Marques",
    "Ana Clara Sampaio Pires",
    "Isabela Sandroni Quaresma da Silva",
    "Luís Eduardo Harada",
    "Ana Paula Pedronetti de Godoy",
    "Ivan Saavedra",
    "Manuela Queiroz",
    "André Luiz Namias Vicente",
    "João Victor de Oliveira Murer",
    "Maria Vitória Hozana",
    "André Pizzirani",
    "João Vitor Lourenço de Oliveira",
    "Murilo Yutaka Kushi",
    "Antonio Carlos Ferreira Maximo (redes sociais)",
    "Julia Campoli Sacco",
    "Pietra Giulia de Oliveira Murer",
    "Eduarda Gabrielly Silva",
    "Kauã Jocarelli Pongiluppe",
    "Pietra Puglia Nuti",
    "Fernando Sotero de Lara",
    "Lays Barreira Garcia",
    "Rafaela Carolina dos Anjos Schmidt",
    "Gustavo Ferreira Gitzel",
    "Lívia Maria Rosa Brandão",
    "Rafaela Daroz Mondelli",
    "Gabriel Luiz Adriao Portela de Oliveira",
    "Lorenza Vitoria Martins de Oliveira",
    "Vitor Gabriel Marinho Domingues",
    "André Amaral",
    "Vinícius Bautista",
]

function prepareArray(array){
    array.sort()
    var table = []
    var new_row = []
    array.forEach(element => {
        if (new_row.length < 3)
            new_row.push(element)
        else{
            table.push(new_row.map(String))
            new_row = [element]
        }
    });
    table.push(new_row)
    return table
}

function populate(array, index){
    return (
        <tr key={index}>
            <td> {array[0]} </td>
            <td> {array[1]} </td>
            <td> {array[2]} </td>
        </tr>
    )
}

function Voluntarios()
{
    return(
        <Card id="Voluntarios">
            <Card.Body className="section-card">
                <p className="section-title">Voluntários</p>
                <Table bordered hover id="members-table">
                    <tbody>
                        {prepareArray(MEMBERS).map(populate)}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
export default Voluntarios