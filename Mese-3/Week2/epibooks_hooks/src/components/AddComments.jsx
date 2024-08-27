import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin, changeUpdateCommentsList }) => {
  const [review, setReview] = useState({
    comment: "",
    rate: "1",
    elementId: asin,
  });

  useEffect(() => {
    setReview((prevReview) => ({
      ...prevReview,
      elementId: asin,
    }));
  }, [asin]);
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     // ora manteniamo aggiornato elementId in this.state.rewiew
  //     this.setState({
  //       review: {
  //         ...this.state.review,
  //         elementId: this.props.asin,
  //         // ora l'asin nello state è aggiornato con il valore ricevuto nelle props
  //         // (valore che abbiamo ricevuto quando abbiamo cliccato su un nuovo libro)
  //       },
  //     })
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // postiamo il nuovo commento
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NTU5MDQzYTU2ODAwMTU4ZWM0N2QiLCJpYXQiOjE3MjQzMzk2MDAsImV4cCI6MTcyNTU0OTIwMH0.3s4fBf_wAd6_WnhGb2s25J5AGcbrlGuBdE9CbFjQhPQ",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento salvato!");
          // quando il commento viene salvato con successo,
          // cambio lo stato di CommentArea
          //
          changeUpdateCommentsList();
          //
          setReview({
            // elementId: this.state.elementId,
            ...review,
            rate: "1",
            comment: "",
          });
        } else {
          alert("Commento NON salvato!");
          throw new Error("Errore nel salvataggio");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Select
          value={review.rate}
          onChange={(e) =>
            setReview({
              ...review,
              rate: e.target.value,
            })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        <Form.Group>
          <Form.Control
            placeholder="Scrivi la tua review"
            value={review.comment}
            onChange={(e) =>
              setReview({
                ...review,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Button variant="success" type="submit">
          INVIA
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;

// const arr1 = ['uno', 'due', 'tre']

// const arr2 = [ ...arr1, 'quattro' ]
