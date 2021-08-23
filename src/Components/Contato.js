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
                <Table bordered hover id="social-table">
                    <tbody>
                        <tr>
                            <td>
                                <FacebookIcon id="icon"/>&nbsp;
                                <a href="https://www.facebook.com/cursinhoresponsa/">Cursinho&nbsp;Responsa</a>
                            </td> 
                        </tr>
                        <tr>
                            <td>
                                <InstagramIcon id="icon"/>&nbsp;
                                <a href="https://www.instagram.com/cursinhoresponsa/">Cursinho&nbsp;Responsa</a>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                <TwitterIcon id="icon"/>&nbsp;
                                <a href="https://twitter.com/ResponsaPopular">Cursinho&nbsp;Popular&nbsp;Responsa</a>
                            </td>
                        </tr>
                        <tr>
                            <td>    
                                <AlternateEmailIcon id="icon"/>&nbsp;
                                { /* eslint-disable-next-line */ }
                                <a href="#">responsacursinho@gmail.com</a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default Contatos