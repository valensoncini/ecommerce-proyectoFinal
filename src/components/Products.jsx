import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Card, Button, Pagination, Spinner } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useProductsContext } from '../contexts/ProductsContext';
import { useAuthContext } from '../contexts/AuthContext';



export default function Products()
{
  
    const {listaProductos, obtenerProductos, filtrarProductos} = useProductsContext();
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("");
    const {verificacionLog} = useAuthContext();

    useEffect(() => {
      verificacionLog();
    },[])
    
 

        useEffect(() => { 
            obtenerProductos().then((listaProductos) =>{
                setCargando(false);
            }).catch((error) =>  {
                setError("Hubo un error en la carga de productos!");
                setCargando(false);
            })
      
        }, []);

        useEffect(() => {
            filtrarProductos(filtro);
        }, [filtro])


       
      

    if(cargando){
        return (
           <div className="text-center my-5">
            <Spinner animation="border" role="status" variant="primary">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p className="mt-2">Cargando productos...</p>
          </div>
        )
    }else if(error){
        return (
          <div className="alert alert-danger text-center my-5">
            {error}
          </div>
        )

    }else{
       return(
    <Container className="my-5">
      <Row className="mb-4">
        <Col md={6}>
          <h2>Nuestros Productos</h2>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formSearch" className="d-flex">
              <Form.Control
                type="text"
                placeholder="Buscar productos..."
                className="me-2"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />
              <Button variant="primary">Buscar</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row className="g-4">
        {listaProductos.map((item) =>(
          <Col>
          <Card className="h-100 shadow-sm">
            <div className='ratio ratio-4x3'>
              <Card.Img variant="top" 
              style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              src={item.img} />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <div className="mt-auto d-flex justify-content-between align-items-center">
                <span className="h5 text-primary">{item.price}</span>
                <Button as={Link} to={"/products/" + item.id} variant="outline-primary" size="sm">
                  Ver Producto
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        ))}
        
        
       
      </Row>

     {/* <Row className="mt-4">
        <Col>
          <Pagination className="justify-content-center">
            <Pagination.Prev disabled />
            <Pagination.Item active>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item>3</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </Col>
      </Row>*/}
    </Container>
    )
  }
}