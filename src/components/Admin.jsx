import React, { useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export default function Admin(){
  const { admin,verificacionLog, logout} = useAuthContext();
  const navegar = useNavigate();

    const handleSubmitLogOut = (e) => {
      logout();
  }

    useEffect(() => {
        verificacionLog();
    }, [])

    if(!admin){
      return(
        navegar("/login")
      )
    }
    return(
            <Container className="my-5">
      <h1 className="text-center mb-5">Panel de Administración</h1>
      
      <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              
              <Card.Title>Agregar Producto</Card.Title>
              <Card.Text>
                Añade nuevos productos al catálogo
              </Card.Text>
              <Button as={Link} to="/admin/addProduct" variant="primary" className="w-100">
                Ir
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              
              <Card.Title>Editar Productos</Card.Title>
              <Card.Text>
                Modifica productos existentes
              </Card.Text>
              <Button as={Link} to="/products" variant="warning" className="w-100">
                Ir
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
              
              <Card.Title>Lista de Productos</Card.Title>
              <Card.Text>
                Visualiza todos los productos
              </Card.Text>
              <Button as={Link} to="/products" variant="info" className="w-100">
                Ir
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col>
          <Card className="h-100 shadow-sm text-center">
            <Card.Body>
             
              <Card.Title>Cerrar Sesión</Card.Title>
              <Card.Text>
                Salir del panel de administración
              </Card.Text>
              <form onSubmit={handleSubmitLogOut}>
              <Button variant="outline-danger" className="w-100" type='submit'>
                Cerrar Sesión
              </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
}