import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import { useAuthContext } from '../contexts/AuthContext';

export default function Contacto(){
  const {verificacionLog} = useAuthContext();
  useEffect(() => {
    verificacionLog();
  }, [])
    return(
          <Container className="my-5">
      <Row>
        <Col lg={6} className="mb-5 mb-lg-0">
          <h2 className="fw-bold mb-4">Contacto</h2>
          
          <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
              
              <span>contacto@mitienda.com</span>
            </div>
            <div className="d-flex align-items-center mb-3">
            
              <span>+54 11 1234-5678</span>
            </div>
            <div className="d-flex align-items-center">
             
              <span>Av. Siempreviva 742, Buenos Aires</span>
            </div>
          </div>

          <div className="ratio ratio-16x9 mb-4">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889527!2d-58.383759!3d-34.603734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1620000000000!5m2!1ses-419!2sar" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Mapa de ubicación"
            ></iframe>
          </div>
        </Col>

        <Col lg={6}>
          <Card className="shadow-sm h-100">
            <Card.Body >
              <h4 className="mb-4">Envianos un mensaje</h4>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar Mensaje
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
}