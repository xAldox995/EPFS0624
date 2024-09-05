import { useState } from "react";
import Article from "./utilities/Artticle";

const SpaceFetchComp = () => {
  const [articles, setArtcles] = useState<Article[]>([]);
  const fetchArticles = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else { 
            throw new Error('Errore nel recupero dati')
        }
      })
      .then((articlesData) => {
        console.log(articlesData)
        setArtcles(articlesData)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <h1>CIAO SONO LA COMP DOVE FACCIO LA FETCH</h1>
  )
};

export default SpaceFetchComp
