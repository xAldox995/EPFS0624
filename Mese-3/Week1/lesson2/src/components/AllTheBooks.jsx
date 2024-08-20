import { Button, Card, Row, Col } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

const AllTheBooks = function () {
  return (
    <Row xs={1} md={3} lg={6} className="g-4 mx-2">
      {fantasy.map((book) => (
        <Col key={book.asin} className="d-flex">
          <Card className="w-100 d-flex flex-column">
            <div className="flex-grow-1 d-flex">
              <Card.Img 
                variant="top" 
                src={book.img} 
                className="img-fluid" 
                style={{ height: '200px', objectFit: 'cover', width: '100%' }} 
              />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title>{book.title}</Card.Title>
              <Card.Text className="flex-grow-1">{book.category}</Card.Text>
              <Button variant="primary" className="mt-auto">More Info</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
