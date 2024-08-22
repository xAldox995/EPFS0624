import { Component } from "react";
import { Form } from "react-bootstrap";

class AddComponent extends Component {
  render() {
    return (
      <>
        <Form.Select aria-label="Default select example" className="my-3">
          <option>Rate the book</option>
          <option>Very dissatisfied</option>
          <option>Somewhat dissatisfied</option>
          <option>Neither satisfied nor dissatisfied</option>
          <option>Somewhat satisfied</option>
          <option>Very satisfied</option>
        </Form.Select>
        <Form.Group>
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea"></Form.Control>
        </Form.Group>
        
      </>
    );
  }
}

export default AddComponent
