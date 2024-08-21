import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchBook: {
      name: "",
    },
  };

  getFilteredBooks() {
    return fantasy.filter((book) =>
      book.title.toLocaleLowerCase().includes(this.state.searchBook.name.toLowerCase())
    );
  }
  render() {
    const filteredBooks = this.getFilteredBooks();
    return (
      <>
        <Form className="mx-5 my-4">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Cerca il tuo libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Il libro che stai cercando"
              onChange={(e) => {
                console.log("usa la tasiera scemo", e.target.value);
                this.setState({
                  searchBook: {
                    ...this.state.searchBook,
                    name: e.target.value,
                  },
                });
              }}
              value={this.state.searchBook.name}
            />
          </Form.Group>
        </Form>
        <Row xs={1} md={3} lg={6} className="g-4 mx-2">
          {filteredBooks.map((book) => (
            <Col key={book.asin} className="d-flex">
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
