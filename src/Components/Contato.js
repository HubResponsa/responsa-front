import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'
import Card from 'react-bootstrap/Card'
import Table from  'react-bootstrap/Table'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
import TwitterIcon from '@material-ui/icons/Twitter'


function Contatos()
{
    return(
        <Card id="Contato">
            <Card.Body className="section-card">
                <p className="section-title">Contatos</p>
                <Table bordered hover>
                    <tbody>
                        <tr>
                            <td>
                                <FacebookIcon id="icon"/>
                                <a href="https://www.facebook.com/cursinhoresponsa/">Cursinho Responsa</a>
                            </td>
                            <td>
                                <InstagramIcon id="icon"/>
                                <a href="https://www.instagram.com/cursinhoresponsa/">Cursinho Responsa</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TwitterIcon id="icon"/>
                                <a href="https://twitter.com/ResponsaPopular">Cursinho Popular Responsa</a>
                            </td>
                            <td>
                                <AlternateEmailIcon id="icon"/>
                                <a href="#">cursinhoresponsa@gmail.com</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default Contatos