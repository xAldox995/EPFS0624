import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
class SingleBook extends Component {
  state = {
    selected: {
      chosen : false,
    },
  };
  render() {
    return (
      <Card className="w-100 d-flex flex-column">
        <div className="flex-grow-1 d-flex">
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className="img-fluid"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="flex-grow-1">
            {this.props.book.category}
          </Card.Text>
          <Button variant="primary" className="my-auto">
            More Info
          </Button>
          <Form.Group className="m-2" id="formGridCheckbox">
            <Form.Check type="checkbox" label="SELECTED" 
            onChange= {(e) => {
                this.setState ({
                    selected : {
                        ...this.state.selected,
                        chosen : e.target.checked,
                    }
                })
            }}
            checked = {this.state.selected.chosen}
            />
          </Form.Group>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
