import React, { Component } from "react";
import {Row, Col } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
    render (){
        return (
            <Row xs={1} md={3} lg={6} className="g-4 mx-2">
                {fantasy.map((book) => (
                    <Col key={book.asin} className="d-flex">
                    <SingleBook book = {book}/>
                    </Col>

                ))}
            </Row>
        )
    }
    }


    //   <Row xs={1} md={3} lg={6} className="g-4 mx-2">
    //   </Row>


export default BookList;