import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card, FloatingLabel } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';
import { useProductsContext } from '../contexts/ProductsContext';
import { useAuthContext } from '../contexts/AuthContext';
import { sweetAlert } from '../assets/sweetAlert';

const AddProduct = ({ onSubmit }) => {
  const {agregarProducto} = useProductsContext()
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    img: ''
  });
  const { admin, verificacionLog} = useAuthContext();
  useEffect(() => {
    verificacionLog();
  }, [])

  const navegar = useNavigate();

    if(!admin){
      return(
        navegar("/login")
      )
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const validarFormulario = () => {
        if (!formData.name.trim()) {
            return('El nombre es obligatorio.');
        }
        if (!formData.price || formData.price <= 0) {
            return('El precio debe ser mayor a 0.');
        }
        if (!formData.description.trim() || formData.description.length < 10) {
            return('La descripción debe tener al menos 10 caracteres.');
        }
        if(!formData.img.trim()){
          return('Error en la URL de la imagen.');
        }
        return true;
    };

  const handleSubmit = (e) => {
        e.preventDefault();
        const rta = validarFormulario()
        if (rta == true) {
            agregarProducto(formData).then((data) => {
                sweetAlert("Producto Agregado con Exito!", "success", "", "Cerrar");
                setFormData({ name: '', price: '', description: '' , img:''});
            }).catch((error) => {
                 sweetAlert("Hubo un problema con su producto", "error", error.message, "Cerrar");
            });
            }else{
                alert("Error en la carga del producto");
            }
  };

  return (
    <Container className="my-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-light">
         <h2>Agregar un Producto</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="name" label="Nombre del Producto" className="mb-3">
              <Form.Control 
                type="text" 
                name="name"
                placeholder="Nombre del Producto" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </FloatingLabel>
              <FloatingLabel controlId="name" label="Descripcion del Producto" className="mb-3">
              <Form.Control 
                type="text" 
                name="description"
                placeholder="Descripcion del Producto" 
                value={formData.description}
                onChange={handleChange}
                required 
              />
            </FloatingLabel>  <FloatingLabel controlId="name" label="Precio del Producto" className="mb-3">
              <Form.Control 
                type="number" 
                name="price"
                placeholder="Nombre del Producto" 
                value={formData.price}
                onChange={handleChange}
                required 
              />
            </FloatingLabel>  <FloatingLabel controlId="name" label="Imagen del Producto" className="mb-3">
              <Form.Control 
                type="text" 
                name="img"
                placeholder="Nombre del Producto" 
                value={formData.img}
                onChange={handleChange}
                required 
              />
            </FloatingLabel>
            
            
            <div className="text-center">
              <Button 
                variant="primary" 
                type="submit" 
                size="lg"
              >
                Guardar Producto
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddProduct;