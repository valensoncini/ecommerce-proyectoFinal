import { useEffect, useState } from "react";
import { useProductsContext } from "../contexts/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button, Card, FloatingLabel } from 'react-bootstrap';
import { useAuthContext } from "../contexts/AuthContext";
import { sweetAlert } from "../assets/sweetAlert";

export default function EditProduct(){

    const {encontrado, obtenerProducto, actualizarProducto} = useProductsContext();
    const [producto, setProducto] = useState(encontrado);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();
    const { admin, verificacionLog} = useAuthContext();
    const navegar = useNavigate();

    useEffect(() => {
      verificacionLog()
    }, [])

    if(!admin){
      return(
        navegar("/login")
      )
    }

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

     const validarFormulario = () => {
        if (!producto.name.trim()) {
            return('El nombre es obligatorio.');
        }
        if (!producto.price || producto.price <= 0) {
            return('El precio debe ser mayor a 0.');
        }
        if (!producto.description.trim() || producto.description.length < 10) {
            return('La descripción debe tener al menos 10 caracteres.');
        }
        if(!producto.img.trim()){
          return('Error en la URL de la imagen.');
        }
        return true;
    };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
        };

          const handleSubmit = async (e) => {
            e.preventDefault();
            const rta = validarFormulario();
            if(rta == true){
                actualizarProducto(producto).then((item) => {
                sweetAlert("Producto Actualizado con Exito!", "success", "", "Cerrar");
                 navegar("/products")
                }).catch((error) => {
                    sweetAlert("Hubo un problema con su producto", "error", error.message, "Cerrar");
                    
                })
                }else{
                sweetAlert("Hubo un problema con su producto", "error", "", "Cerrar");
                }

    
            };

            





    return(
         <Container className="my-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-light">
         <h2>Editar un Producto</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="name" label="Nombre del Producto" className="mb-3">
              <Form.Control 
                type="text" 
                name="name"
                placeholder="Nombre del Producto" 
                value={producto.name}
                onChange={handleChange}
                required 
              />
            </FloatingLabel>
              <FloatingLabel controlId="name" label="Descripcion del Producto" className="mb-3">
              <Form.Control 
                type="text" 
                name="description"
                placeholder="Descripcion del Producto" 
                value={producto.description}
                onChange={handleChange}
                required 
              />
            </FloatingLabel>  <FloatingLabel controlId="name" label="Precio del Producto" className="mb-3">
              <Form.Control 
                type="number" 
                name="price"
                placeholder="Nombre del Producto" 
                value={producto.price}
                onChange={handleChange}
                required 
              />
            </FloatingLabel>  <FloatingLabel controlId="name" label="Imagen del Producto" className="mb-3">
              <Form.Control 
                type="text" 
                name="img"
                placeholder="Nombre del Producto" 
                value={producto.img}
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
    )
}