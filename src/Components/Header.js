import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo2 from '../images/ResPNG.png'

function Header()
{
    return(
        <div id="header">
            <Navbar sticky="top" expand="lg" variant="light" id="navbar">
                <Navbar.Brand href="#home"> <img alt="" src={Logo2} id="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#posts">Posts</Nav.Link>
                    <Nav.Link href="#QuemSomos">Quem Somos</Nav.Link>
                    <Nav.Link href="#Funcionamento">Funcionamento</Nav.Link>
                    <Nav.Link href="#Voluntarios">Voluntários</Nav.Link>              
                    <Nav.Link href="#Colabore">Colabore</Nav.Link>
                    <NavDropdown title="Participe" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Aluno</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Voluntário</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#Contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header