import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComments";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  const [updateCommentsList, setUpdateCommentsList] = useState(false);

  useEffect(() => {
    fetchComments();
  }, [asin]);

  useEffect(() => {
    fetchComments();
    setUpdateCommentsList(false);
  }, [updateCommentsList]);

  // componentDidMount = () => {
  //   this.fetchComments();
  // };

  // // la fetch all'avvio va anche bene, ma quello che ci serve sarebbe
  // // richiamare la fetch ulteriormente ogni volta che cambia l'asin selezionato

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.asin !== this.props.asin) {
  //     // abbiamo cliccato su un nuovo libro!
  //     this.fetchComments();
  //   }

  //   if (prevState.updateCommentsList !== this.state.updateCommentsList) {
  //     this.fetchComments();
  //     // recupero nuovamente i commenti anche quando cambia la variabile di stato
  //     // (updateCommentsList) che avevo creato per avvisarmi di quanto AddComment
  //     // posta con successo una recensione
  //   }
  // };

  const fetchComments = () => {
    // fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`)
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NTU5MDQzYTU2ODAwMTU4ZWM0N2QiLCJpYXQiOjE3MjQzMzk2MDAsImV4cCI6MTcyNTU0OTIwMH0.3s4fBf_wAd6_WnhGb2s25J5AGcbrlGuBdE9CbFjQhPQ",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero delle recensioni");
        }
      })
      .then((arrayOfComments) => {
        console.log(arrayOfComments);
        setComments(arrayOfComments);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <CommentsList comments={comments} />
      <AddComment
        asin={asin}
        changeUpdateCommentsList={() => setUpdateCommentsList(true)}
      />
      {/* prop drilling: prendo una prop da sopra, SingleBook, a sotto, AddComment */}
    </div>
  );
};

export default CommentArea;
