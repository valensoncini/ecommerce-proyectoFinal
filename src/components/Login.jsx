

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from 'react';

import { sweetAlert } from '../assets/sweetAlert';
import { useAuthContext } from '../contexts/AuthContext';
import { loginEmailPass } from '../assets/autenticacion/firebase';


export default function Login(){
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login, admin, user} = useAuthContext();
  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    loginEmailPass(usuario, password).then((u) => {
      login(u.email);
      sweetAlert("Ingreso Exitoso!", "success", "", "Cerrar")
      navigate("/");
    }).catch((error) => {
      alert(error.message);
    })
  };

    return(
        <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="text-center mb-4">
                <h3>Iniciar Sesión</h3>
                <p className="text-muted">Ingresa tus credenciales para acceder</p>
              </div>

              <Form onSubmit={handleSubmit}>
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
                  Iniciar Sesión
                </Button>

                <div className="text-center">
                  <p className="text-muted">
                    ¿No tienes una cuenta? <Button variant="secondary" as={Link} to="/register" className="w-100 mb-3">
                  Registrate
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