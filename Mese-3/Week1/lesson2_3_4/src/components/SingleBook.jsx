import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
class SingleBook extends Component {
  state = {
    selected: {
      chosen: false,
    },
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: {
        ...prevState.selected,
        chosen: !prevState.selected.chosen,
      },
    }));
  };

  render() {
    // const { book } = this.props;
    // const { chosen } = this.state.selected;

    // const cardStyle= chosen ? { border: "3px solid red" } : {};


    return (
      <Card className="w-100 d-flex flex-column" style={this.state.selected.chosen ? { border: "3px solid red" } : {}}>
        <div className="flex-grow-1 d-flex">
          <Card.Img
            variant="top"
            src={this.props.book.img}
            className="img-fluid"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
            onClick={this.toggleSelected}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="flex-grow-1">€ {this.props.book.price}</Card.Text>
          <Button variant="primary" className="my-auto">
            More Info
          </Button>
          <Form.Group className="m-2" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="SELECTED"
              onChange={this.toggleSelected}
              checked={this.state.selected.chosen}
            />
          </Form.Group>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
