import { useEffect, useState } from "react";
import Article from "./utilities/Artticle";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SpaceFetchComp = () => {
  const [articles, setArtcles] = useState<Article[]>([]);
  const fetchArticles = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dati");
        }
      })
      .then((articlesData) => {
        console.log(articlesData);
        setArtcles(articlesData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <h1>SPACE NEWS ARTICLES</h1>
      <Row xs={1} md={2} lg={5} className="g-2">
        {articles.map((article) => {
          return (
            <Col key={article.id}>
              <Card>
                <Card.Img variant="top" src={article.image_url} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.summary}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/article/" + article.id)}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SpaceFetchComp;
