import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from './Job'
import { useNavigate } from "react-router-dom";
import { removeFavoriteJobAction } from "../redux/actions";


const FavoriteComp = () => {

    const favoritesJobs = useSelector((state) => state.favorites.favoritesJobs)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Container>
          <Row className="align-items-center">
            <Col xs={8} className="mx-auto my-3">
              <h1 className="display-4">Your Favorite Jobs</h1>
            </Col>
            <Col xs={4} className="mx-auto my-3">
            <Button variant="outline-primary"
            onClick={()=>navigate('/')}
            >HOME
            </Button>
            </Col>
            <Col xs={10} className="mx-auto">
              {favoritesJobs.length > 0 ? (
                favoritesJobs.map((jobData) => (
                  <div key={jobData._id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
                    <Job data={jobData} />
                    <Button variant="outline-danger" onClick={() => {
                        dispatch(removeFavoriteJobAction(jobData))
                    }}
                    >
                      Remove from Favorites
                    </Button>
                  </div>
                ))
              ) : (
                <p>No favorite jobs added yet.</p>
              )}
            </Col>
          </Row>
        </Container>
      );

}

export default FavoriteComp