import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

const BookList = ({ booksArray }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedBookAsin, setSelectedBookAsin] = useState("");

  const changeSelectedBookAsin = (newAsin) => {
    setSelectedBookAsin({
      selectedBookAsin: newAsin,
    });
  };

  return (
    <Container>
      <Row className="my-5">
        <Col>
          <Form.Control
            type="text"
            placeholder="Cerca un libro"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Row className="g-4">
            {booksArray
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((scifiBook) => (
                <Col
                  xs={12}
                  md={6}
                  lg={3}
                  className="d-flex"
                  key={scifiBook.asin}
                >
                  <SingleBook
                    libro={scifiBook}
                    changeSelectedBookAsin={changeSelectedBookAsin}
                    selectedBookAsin={selectedBookAsin}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={12} md={4} className="border border-2 border-dark">
          <CommentArea asin={selectedBookAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
