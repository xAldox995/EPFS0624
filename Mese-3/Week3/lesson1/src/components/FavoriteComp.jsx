import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from './Job'


const FavoriteComp = () => {

    const favoriteJobs = useSelector((state) => state.favorites.jobOffers)
    const dispatch = useDispatch()

    return (
        <Container>
          <Row>
            <Col xs={10} className="mx-auto my-3">
              <h1 className="display-4">Your Favorite Jobs</h1>
            </Col>
            <Col xs={10} className="mx-auto">
              {favoriteJobs.length > 0 ? (
                favoriteJobs.map((jobData) => (
                  <div key={jobData._id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
                    <Job data={jobData} />
                    <Button variant="outline-danger" onClick={() => {
                        dispatch({
                            type: 'REMOVE_JOB',
                            payload: jobData._id
                        })
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