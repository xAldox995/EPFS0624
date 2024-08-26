import React, { Component } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  render() {
    return (
      <Row xs={1} md={3} lg={6} className="g-4 mx-2">
        {fantasy.map((book) => (
          <Col key={book.asin} className="d-flex">
            <SingleBook img={book.img} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default AllTheBooks;
