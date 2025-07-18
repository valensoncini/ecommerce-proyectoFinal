import React, { useEffect } from 'react';
import { Container, Table, Button, Row, Col, Form, Alert, Card } from 'react-bootstrap';
import {Link, Navigate} from 'react-router-dom';
import { useCarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from '../contexts/AuthContext';
import { sweetAlert } from '../assets/sweetAlert';

export default function Cart(){
    const {carrito, vaciarCarrito, borrarDelCarrito} = useCarritoContext();
    const {user, admin, verificacionLog} = useAuthContext();

    useEffect(() => {
      verificacionLog();
    }, [])

    

    const total = carrito.reduce ((subtotal,producto) => subtotal + producto.price * producto.cantidad, 0)

    function borrarProducto(id){
    sweetAlert("Producto borrado!", "success", "", "Cerrar");
      borrarDelCarrito(id);
    }

    if(!user && !admin){
          return(
            <Navigate to="/login" replace/>
        )
    }


    return(
        <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h2>Tu Carrito</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.length > 0 ? carrito.map((item) =>(
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img 
                      src={item.img} 
                      alt="Producto" 
                      className="me-3" 
                      style={{width: '80px', height: '60px', objectFit: 'cover'}}
                    />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>{item.cantidad}</td>
                <td>{item.price * item.cantidad}</td>
                <td>
                  <Button variant="outline-danger" size="sm" onClick={() => borrarProducto(item.id)}>
                   Eliminar
                  </Button>
                </td>
              </tr>
             )) : <tr> 
                  <td colSpan="5" className="text-center">Carrito Vacio</td>
              </tr>}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between mb-4">
            <Button variant="outline-secondary" as={Link} to="/products">Seguir comprando</Button>
            <Button variant="danger" onClick={vaciarCarrito}>Vaciar carrito</Button>
          </div>
        </Col>

        <Col lg={4}>
          <Card className="shadow-sm">
            <Card.Header className="bg-light">
              <h5 className="mb-0">Resumen de compra</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>{total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Envío:</span>
                  <span>$0.00</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total:</span>
                  <span>{total}</span>
                </div>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Código de descuento</Form.Label>
                <div className="d-flex">
                  <Form.Control type="text" placeholder="Ingresa código" />
                  <Button variant="outline-primary" className="ms-2">
                    Aplicar
                  </Button>
                </div>
              </Form.Group>

              <Button variant="primary" size="lg" className="w-100">
                Proceder al pago
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
}