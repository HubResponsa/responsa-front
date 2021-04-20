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
                        https://docs.google.com/forms/d/1KxLAtacv_XF4B3BKlg7Btl7tiFei1a2ZWvKIV95nG0s/edit?usp=sharing
                    </p>
                    <br/>
                    <p className="section-subtitle">Participe como Voluntário</p>
                    <p className="section-text">
                        https://docs.google.com/forms/d/1tQjKHvOZNZm8-v4_UExYqzWWvd0mljKyQF719-2HPMc/edit?usp=sharing
                    </p>
                </Card.Body>
            </Card>
        </div>    
    )
}
export default Participe