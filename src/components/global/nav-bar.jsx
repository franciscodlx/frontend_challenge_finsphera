import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from '../../assets/logo.png';

const NabBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-white'>
      <Container>
        <Navbar.Brand href="/">
          <Image 
            className='brand-image'
            fluid={ true }  
            src={ logo } 
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navForm" className='bg-white' />
        <Navbar.Collapse id="navForm">
          <Nav className='ms-auto'>
            <Nav.Link href="#" className='text-dark navlink fw-bold'>
              Acerca de Nosotros
            </Nav.Link>
            <Nav.Link href="#" className='text-dark navlink fw-bold'>
              ¿C&oacute;mo funciona?
            </Nav.Link>
            <Nav.Link href="#" className='text-dark navlink fw-bold'>
              Cont&aacute;ctanos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NabBar;