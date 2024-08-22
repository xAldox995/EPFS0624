import { Component } from "react";
import { Row, Form } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Form.Select aria-label="Rate the book">
            <option>Very dissatisfied</option>
            <option>Somewhat dissatisfied</option>
            <option>Neither satisfied nor dissatisfied</option>
            <option>Somewhat satisfied</option>
            <option>Very satisfied</option>
          </Form.Select>
        </Row>
      </Form>
    );
  }
}

export default AddComment;
