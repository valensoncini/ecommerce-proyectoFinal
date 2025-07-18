import React, { useEffect } from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
export default function Home(){
  const {verificacionLog} = useAuthContext();

   useEffect(() => {
          verificacionLog();
      }, [])
  return (
      <div className="mb-5">
      {/* Carrusel mejorado */}
      <Carousel fade controls={false} indicators={false} interval={5000} className="mb-4">
        <Carousel.Item>
          <div className="ratio ratio-16x9" style={{ backgroundColor: '#f8f9fa' }}>
            <img
              className="d-block w-100 object-fit-cover"
              src="https://i.postimg.cc/qB5Nd7VG/parejacompras.jpg"
              alt="Ofertas especiales"
            />
          </div>
          <Carousel.Caption className="start-0 end-0 bottom-0 bg-dark bg-opacity-75 p-4">
            <div className="container">
              <h3 className="display-5 fw-bold">Ofertas de Temporada</h3>
              <p className="lead">Hasta 40% de descuento en nuestra colección primavera-verano</p>
              <Button variant="light" size="lg" as={Link} to="/products">
                Ver ofertas 
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="ratio ratio-16x9" style={{ backgroundColor: '#f8f9fa' }}>
            <img
              className="d-block w-100 object-fit-cover"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Nuevos productos"
            />
          </div>
          <Carousel.Caption className="start-0 end-0 bottom-0 bg-dark bg-opacity-75 p-4">
            <div className="container">
              <h3 className="display-5 fw-bold">Nueva Colección</h3>
              <p className="lead">Descubre los productos que acaban de llegar</p>
              <Button variant="light" size="lg" as={Link} to="/products">
                Ver novedades 
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Sección informativa */}
      <Container className="my-5">
        <Row className="g-4">
          <Col lg={6} className="d-flex align-items-center">
            <div>
              <h2 className="fw-bold mb-4">Tu tienda online de confianza</h2>
              <p className="lead mb-4">
                En <strong>AURA</strong> nos dedicamos a ofrecerte los mejores productos con la 
                más alta calidad y al mejor precio del mercado. Con más de 10 años de experiencia 
                en el rubro, garantizamos tu satisfacción.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4">
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Envíos a todo el país</span>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Garantía de 12 meses</span>
                </div>
                
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Atención personalizada</span>
                </div>
              </div>
              
              <Button variant="outline-primary" size="lg" as={Link} to="/sobreNosotros">
                Conoce nuestra historia
              </Button>
            </div>
          </Col>
          
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <div className="ratio ratio-16x9">
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Nuestro equipo" 
                  className="object-fit-cover"
                />
              </div>
              <Card.Body className="text-center">
                <h5 className="card-title">Nuestro compromiso</h5>
                <p className="card-text">
                  Trabajamos cada día para brindarte la mejor experiencia de compra online
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    
      <Container fluid className="bg-light py-5 mt-4">
        <Container>
          <h2 className="text-center mb-5">¿Por qué elegirnos?</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 bg-transparent text-center">
                <Card.Body>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 8V12L15 15" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <Card.Title>Envío rápido</Card.Title>
                  <Card.Text>
                    Recibe tus productos en 24-48 horas en áreas metropolitanas
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 border-0 bg-transparent text-center">
                <Card.Body>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V16.01M12 8V12" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <Card.Title>Soporte 24/7</Card.Title>
                  <Card.Text>
                    Nuestro equipo está disponible para ayudarte cuando lo necesites
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="h-100 border-0 bg-transparent text-center">
                <Card.Body>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle d-inline-flex mb-3">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 12L12 8L8 12" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16V8" stroke="#0d6efd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <Card.Title>Devoluciones fáciles</Card.Title>
                  <Card.Text>
                    30 días para devoluciones sin complicaciones
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
   

    )
}