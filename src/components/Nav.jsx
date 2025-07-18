
// src/components/Navbar.jsx
import React, { useEffect } from 'react';
import { Container, Navbar, Nav, Form, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from '../contexts/AuthContext';


function AppNavbar() {

  const {carrito} = useCarritoContext();
  const {user, admin, logout, verificacionLog} = useAuthContext();
  useEffect(() => {
            verificacionLog();
        }, [])
  const handleSubmitLogOut = (e) => {
      logout();
  }

  if(!user && !admin){
    return (
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
              AURA
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" active>Inicio</Nav.Link>
                <Nav.Link as={Link} to="/products">Productos</Nav.Link>
                <Nav.Link as={Link} to="/sobreNosotros">Sobre Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center">
                
                
                <Button as={Link} to="/cart" variant="outline-primary" className="me-2 position-relative">
                Carrito
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
                    {carrito.length ? carrito.length : 0}
                  </Badge>
                </Button>
                
                <Button  as={Link} to="/login" variant="primary">
                  Log In
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  }else if(user && !admin){
       return (
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
          <Container>
            <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
              AURA
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" active>Inicio</Nav.Link>
                <Nav.Link as={Link} to="/products">Productos</Nav.Link>
                <Nav.Link as={Link} to="/sobreNosotros">Sobre Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center">
                
                
                <Button as={Link} to="/cart" variant="outline-primary" className="me-2 position-relative">
                Carrito
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
                    {carrito.length ? carrito.length : 0}
                  </Badge>
                </Button>
                <form onSubmit={handleSubmitLogOut}>
                <Button  variant="primary" type='submit'>
                  Log Out
                </Button>
                </form> 
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );

  }else if(admin && !user){
           return (
      <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
          <Container>
            <Navbar.Brand as={Link} to="/admin" className="fw-bold text-primary">
              AURA Admin
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" active>Inicio</Nav.Link>
                <Nav.Link as={Link} to="/admin" >Panel de Administrador</Nav.Link>
                <Nav.Link as={Link} to="/products">Productos</Nav.Link>
                <Nav.Link as={Link} to="/admin/addProduct">Agregar Productos</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center">
                
                
                <Button as={Link} to="/cart" variant="outline-primary" className="me-2 position-relative">
                Carrito
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
                    {carrito.length ? carrito.length : 0}
                  </Badge>
                </Button>
                <form onSubmit={handleSubmitLogOut}>
                <Button  variant="primary" type='submit'>
                  Log Out
                </Button>
                </form> 
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );

  }
  
  
}

export default AppNavbar;
