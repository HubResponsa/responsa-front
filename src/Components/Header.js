import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../images/logo.png'

function Header()
{
    return(
        <div id="header">
            <Navbar sticky="top" expand="lg" variant="light" class="navbar">
                <Navbar.Brand href="#home"> <img alt="responsa's logo" src={Logo} id="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="#posts">Posts</Nav.Link> */}
                        <Nav.Link href="#QuemSomos">Quem Somos</Nav.Link>
                        <Nav.Link href="#Funcionamento">Funcionamento</Nav.Link>
                        <Nav.Link href="#Voluntarios">Voluntários</Nav.Link>              
                        <Nav.Link href="#Colabore">Colabore</Nav.Link>
                        <Nav.Link href="#Participe">Participe</Nav.Link>
                        {/* <NavDropdown title="Participe" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#PAluno">Aluno</NavDropdown.Item>
                            <NavDropdown.Item href="#PVoluntario">Voluntário</NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link href="#Contato">Contatos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Header