import { useParams } from "react-router-dom";
import Article from "./utilities/Artticle";
import { useEffect, useState } from "react";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const fetchArticleDetails = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
            throw new Error ("Errore nel recupero dell'articolo")
        }
      })
      .then((dataArticle)=> {
        console.log(dataArticle)
        setArticle(dataArticle)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=> {fetchArticleDetails()}, [id])
  if (!article){
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image_url} alt={article.title} style={{ width: '100%', maxHeight: '500px' }} />
      <p><strong>Published on:</strong> {new Date(article.published_at).toLocaleDateString()}</p>
      <p><strong>Source:</strong> {article.news_site}</p>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read Full Article</a>
    </div>
  );
};

export default ArticleDetail;
