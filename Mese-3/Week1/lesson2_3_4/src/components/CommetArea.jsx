import { Component } from "react";
import AddComponent from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };
  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzNjQzYTU2ODAwMTU4ZWMzZDciLCJpYXQiOjE3MjQzMzY4MTAsImV4cCI6MTcyNTU0NjQxMH0.IAYgX8hoqO8OfkDgo6Ow2vo_a21WFMv6YeiRdBNises",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Qui la repense è ok", response);
          return response.json();
        } else {
          throw new Error ('errore nel recupero delle recensioni')
        }
      })
      .then((arrayOfComments) => {
        console.log(arrayOfComments)
        this.setState({
          comments : arrayOfComments
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        {/* <Form.Select aria-label="Default select example" className="my-3">
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
        </Form.Group> */}
        <CommentsList comments = {this.state.comments} />
        <AddComponent asin = {this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
