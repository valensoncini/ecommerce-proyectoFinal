import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button, Badge, Card, Spinner, Form } from 'react-bootstrap';

import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../contexts/ProductsContext';
import { useCarritoContext } from '../contexts/CarritoContext';
import { useAuthContext } from '../contexts/AuthContext';
import { sweetAlert } from '../assets/sweetAlert';

export default function ProductDetail(){
   
    const {agregarAlCarrito} = useCarritoContext();
    const navegar = useNavigate();
    const {encontrado, obtenerProducto, eliminarProducto} = useProductsContext();
    const {id} = useParams()
    const [producto, setProducto] = useState(null)
    const [cantidad, setCantidad] = useState(1)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const {admin, user, verificacionLog} = useAuthContext();
    useEffect(() => {
        verificacionLog();
    }, [])


    useEffect(() => {
        obtenerProducto(id).then(() => {
            setCargando(false)
        }).catch((error) => {
            if(error = "Producto no encontrado"){
                setError("Producto no encontrado");
            }else if(error = "Hubo un problema con la carga de productos."){
                setError("Hubo un problema con la carga de productos.");
            }
            setCargando(false)
        })           
    }, [id]);

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
        }else if(!encontrado) return null;

    function agregar(){
        if(cantidad < 1 ) return;
        sweetAlert("Producto Agregado con Exito!", "success", "", "Cerrar")
        agregarAlCarrito({...encontrado,cantidad});  
    }


    function sumar(){
        setCantidad(cantidad + 1)
    }

    function restar(){
        if(cantidad > 1){ 
            setCantidad(cantidad - 1)
        }
       
    }

    function eliminarItem(){
        eliminarProducto(id).then(() => {
            navegar("/products");
        }).catch((error) => {
            sweetAlert("Hubo un problema!", "error", error, "Cerrar")
        })
    }

    if(!user && !admin){
          return(
            <Navigate to="/login" replace/>
        )
    }

    return(
         <Container className="my-5">
      <Button as={Link} to="/products" variant="outline-secondary" className="mb-4">
        Volver a Productos
      </Button>
      
      <Row>
        <Col md={6}>
          <Image 
            src={encontrado.img}
            fluid 
            rounded 
            className="shadow-sm"
          />
        </Col>
        
        <Col md={6}>
          <Card className="border-0">
            <Card.Body>
              <h2>{encontrado.name}</h2>
              
              <h3 className="text-primary mb-4">{encontrado.price}</h3>
              
              <p className="mb-4">
               {encontrado.description}
              </p>
              
              <div className="d-flex align-items-center mb-4 gap-2">
                {!admin ? <>
                <Button variant="secondary" size="xs" onClick={sumar}>
                 +
                </Button>
                <span>{cantidad}</span>
                <Button variant="secondary" size="xs" onClick={restar}>
                 -
                </Button> </>: <></>}
               {admin ?  <Button variant="primary" size="lg" /*onClick={agregar}*/ as={Link} to={"/admin/editProduct/" + encontrado.id}>
                 Editar Producto
                </Button> : <Button variant="primary" size="lg" onClick={agregar}>
                 Agregar Producto
                </Button>}
            { admin ?   <Button variant="secondary" size="lg" onClick={eliminarItem}>
                 Eliminar Producto
                </Button> : <></>}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    )
}