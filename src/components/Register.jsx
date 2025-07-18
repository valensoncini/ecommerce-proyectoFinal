import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { crearUsuario } from "../assets/autenticacion/firebase";
import { sweetAlert } from "../assets/sweetAlert";


export default function Register(){
      const [usuario, setUsuario] = useState('');
      const [password, setPassword] = useState('');
      const { login} = useAuthContext();
      const navigate = useNavigate();



    function registrarUSuario(e){
    e.preventDefault();
        crearUsuario(usuario, password).then((user) => {
            login(user);
            sweetAlert("Registro Exitoso!", "success", "", "Cerrar");
            navigate('/');
        }).catch((error) => {
            sweetAlert("Error en el registro!", "error", error.message, "Cerrar");
            console.log(error.message);
        });
     
   
  }

     return(
        <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="text-center mb-4">
                <h3>Registro</h3>
                <p className="text-muted">Registrese para acceder</p>
              </div>

              <Form onSubmit={registrarUSuario}>
                <Form.Group className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      
                    </span>
                    <Form.Control 
                      type="email" 
                      placeholder="tu@email.com" 
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      required 
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                     
                    </span>
                    <Form.Control 
                      type="password" 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Registrarse
                </Button>

                <div className="text-center">
                  <p className="text-muted">
                    ¿Ya tienes una cuenta? <Button variant="secondary" as={Link} to="/login" className="w-100 mb-3">
                  Inicia Sesion
                </Button>

                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )


    
}