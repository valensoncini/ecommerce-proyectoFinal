

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(){
    return(
          <footer className="bg-dark text-white py-3 mt-4">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <small>© {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <small>
              <a href="/terminos" className="text-white text-decoration-none me-3">Términos</a>
              <a href="/privacidad" className="text-white text-decoration-none">Privacidad</a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
    )
}