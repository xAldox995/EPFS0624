import { ListGroupItem } from 'react-bootstrap'

const SingleComment = (props) => {
  // SingleComment riceve props.commento
  return (
    <ListGroupItem data-testid ='comment-element'>
      {props.commento.rate} - {props.commento.comment}
      {/* 5 - Bellissimo! */}
    </ListGroupItem>
  )
}

export default SingleComment
