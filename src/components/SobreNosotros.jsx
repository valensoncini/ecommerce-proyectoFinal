import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useAuthContext } from '../contexts/AuthContext';

export default function SobreNosotros(){
    const {verificacionLog} = useAuthContext();
    useEffect(() =>{
        verificacionLog();
    }, [])
    return(
           <Container className="my-5">
            <Row className="justify-content-center">
                <Col lg={8} className="text-center mb-5">
                <h2 className="fw-bold mb-4">Sobre Nosotros</h2>
                <p className="lead">
                    Somos una tienda comprometida con ofrecer productos de calidad y una experiencia de compra excepcional.
                </p>
                </Col>
            </Row>

            <Row className="g-4">
                <Col md={4}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                    <h4>Nuestra Historia</h4>
                    <p>
                    Fundada en 2010, comenzamos como un pequeño emprendimiento familiar y hoy somos líderes en nuestro rubro.
                    </p>
                </Card>
                </Col>

                <Col md={4}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                
                    <h4>Nuestra Misión</h4>
                    <p>
                    Proporcionar productos de calidad a precios accesibles, con un servicio al cliente excepcional.
                    </p>
                </Card>
                </Col>

                <Col md={4}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                
                    <h4>Nuestros Valores</h4>
                    <p>
                    Honestidad, transparencia y pasión por lo que hacemos son los pilares de nuestro negocio.
                    </p>
                </Card>
                </Col>
            </Row>
    </Container>
    )
}