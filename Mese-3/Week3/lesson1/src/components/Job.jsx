import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'

const Job = ({ data }) => {

  const dispatch = useDispatch()
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button variant="outline-info"
        onClick={() => {
          console.log('TASTO FUNZIONA')
          dispatch({
            type : 'ADD_JOB',
            payload : data
          })
        }}>
          Adds to Favorites</Button>
      </Col>
    </Row>
  );
};
export default Job;
