import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComponent extends Component {
  state = {
    review: {
      rate: "",
      comment: "",
    },
  };

  subReview = (e) => {
    e.preventDefault();
    fetch(
      "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzNjQzYTU2ODAwMTU4ZWMzZDciLCJpYXQiOjE3MjQzMzY4MTAsImV4cCI6MTcyNTU0NjQxMH0.IAYgX8hoqO8OfkDgo6Ow2vo_a21WFMv6YeiRdBNises",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("recensione inviata");
          this.setStatetate({
            review: {
              rate: "",
              comment: "",
            },
          });
        } else {
          console.log("PROBLEMA NEL SECONDO THEN");
          throw new Error("error");
        }
      })
      .catch((err) => {
        console.log("problema nel catch", err);
      });
  };
  render() {
    return (
      <Form className="my-3" onSubmit={this.subReview}>
        <p>Your Review</p>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            this.setState({
              review: {
                ...this.state.review,
                rate: e.target.value,
              },
            });
          }}
          value={this.state.review.rate}
        >
          <option>Rate the book</option>
          <option>Very dissatisfied</option>
          <option>Somewhat dissatisfied</option>
          <option>Neither satisfied nor dissatisfied</option>
          <option>Somewhat satisfied</option>
          <option>Very satisfied</option>
        </Form.Select>
        <Form.Group className="my-2">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  comment: e.target.value,
                },
              });
            }}
            value={this.state.review.comment}
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">Send</Button>
      </Form>
    );
  }
}

export default AddComponent;
