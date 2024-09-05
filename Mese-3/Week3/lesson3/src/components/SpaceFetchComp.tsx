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
        setArtcles(articlesData.results);
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
    <Container className="mt-2 text-center">
      <h1 className="mb-5">SPACE NEWS ARTICLES</h1>
      <Row xs={1} md={2} lg={5} className="g-3">
        {articles.map((article) => {
          return (
            <Col key={article.id}>
              <Card className="h-100 d-flex flex-column">
                <Card.Img variant="top" src={article.image_url} className="img-fluid"
                style={{ height: '200px', objectFit: 'cover' }}  />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text className="flex-grow-1">PUBBLICATO IL : {new Date(article.published_at).toLocaleDateString()}</Card.Text>
                  <Button
                    variant="outline-primary"
                    className="mt-auto"
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
