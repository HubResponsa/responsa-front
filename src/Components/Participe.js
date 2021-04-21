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
                    <p className="section-subtitle">
                        <a className="section-text" href="https://docs.google.com/forms/d/e/1FAIpQLSeDjIRJTvJy-X1K3bsYHZCmc_uSjMVqCMe6FFb3yTL6NstRAw/viewform?usp=sf_link">
                            Formulário de matrícula
                        </a>
                    </p>
                    <br/>
                    <p className="section-subtitle">Participe como Voluntário</p>
                    <p className="section-subtitle">
                        <a className="section-text" href="https://docs.google.com/forms/d/e/1FAIpQLSe23J3MIXIhKdma6cVHXBKjQhFxCjc4qgqBV6OZUVEif526xQ/viewform?usp=sf_link">
                            Formulário de inscrição de voluntários
                        </a>
                    </p>
                </Card.Body>
            </Card>
        </div>    
    )
}
export default Participe