import { Container, Row, Col } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container fluid>
      <Row className="text-center text-md-start m-5">
        <Col xs={12} md={6}>
          <h5>About Us</h5>
          <p>
            Welcome to My Book E-commerce, your one-stop destination for a wide
            range of books across various genres. Whether you're looking for the
            latest bestsellers, classic literature, or academic resources, we
            are committed to providing you with quality titles at competitive
            prices. Our mission is to foster a love of reading by making books
            accessible to everyone. Explore our extensive collection and find
            your next great read today!
          </p>
        </Col>
        <Col xs={12} md={6}>
          <h5>Contact</h5>
          <address>
            <h6>My Book E-coomerce</h6>
            <p>Bari City, Piazza delle Orecchiette n°10</p>
            <p>Num: 123456</p>
          </address>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
