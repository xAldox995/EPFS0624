import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleBook = function (props) {
  return (
    // <Col key={props.book.asin} className="d-flex">
      <Card className="w-100 d-flex flex-column">
        <div className="flex-grow-1 d-flex">
          <Card.Img
            variant="top"
            src={props.book.img}
            className="img-fluid"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text className="flex-grow-1">{props.book.category}</Card.Text>
          <Button variant="primary" className="mt-auto">
            More Info
          </Button>
        </Card.Body>
      </Card>
    // </Col>
  );
};


export default SingleBook