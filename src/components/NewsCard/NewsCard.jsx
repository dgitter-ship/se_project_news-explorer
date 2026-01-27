import "./NewsCard.css";

function NewsCard({ article }) {
  console.log("Article object:", article);

  if (!article) {
    return <div className="card__error">No article data available</div>;
  }

  const handleDate = (article) => {
    article.publishedAt.toISOString().split("T")[0];
  };

  return (
    <li className="card">
      <img
        src={article.image || article.urlToImage}
        alt="Article Image"
        className="card__image"
      />
      <p className="card__date">{article.publishedAt}</p>
      <h2 className="card__title">{article.title}</h2>
      <p className="card__content">{article.content}</p>
      <p className="card__source">{article.source?.name || "Unknown Source"}</p>
    </li>
  );
}

export default NewsCard;
