import { Button, ListGroupItem } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = (asin) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3MzAzNjQzYTU2ODAwMTU4ZWMzZDciLCJpYXQiOjE3MjQzMzY4MTAsImV4cCI6MTcyNTU0NjQxMH0.IAYgX8hoqO8OfkDgo6Ow2vo_a21WFMv6YeiRdBNises",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("recensione eliminata");
          alert("La recensione è stata eliminata");
        } else {
          throw new Error("La recensione non è stata eliminata");
        }
      })
      .catch((error) => {
        console.log("C'è un errore nel catch", error);
      });
  };

  return (
    <ListGroupItem>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        DELETE REVIEW
      </Button>
    </ListGroupItem>
  );
};

export default SingleComment
