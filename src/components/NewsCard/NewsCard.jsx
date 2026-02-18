import "./NewsCard.css";
import saveBtn from "../../assets/save-btn.svg";
import removeIcon from "../../assets/remove-icon.svg";
import isSavedIcon from "../../assets/isSaved-btn.svg";

function NewsCard({
  article,
  onSaveArticle,
  onRemoveArticle,
  isSaved,
  isMainPage,
}) {
  console.log("Article object:", article);

  if (!article) {
    return <div className="card__error">No article data available</div>;
  }

  const handleSave = () => {
    console.log("Save button clicked for article:", article);
    onSaveArticle(article);
  };

  const handleRemove = () => {
    console.log("Remove button clicked for article:", article);
    onRemoveArticle(article);
  };

  return (
    <li className="card">
      {isMainPage ? (
        isSaved ? (
          <button className="card__save-btn" onClick={handleRemove}>
            <img src={isSavedIcon} alt="Saved" />
          </button>
        ) : (
          <button className="card__save-btn" onClick={handleSave}>
            <img src={saveBtn} alt="Save" />
          </button>
        )
      ) : isSaved ? (
        <button className="card__save-btn" onClick={handleRemove}>
          <img src={removeIcon} alt="Remove" />
        </button>
      ) : null}
      <img
        src={article.image || article.urlToImage}
        alt="Article Image"
        className="card__image"
      />
      <div className="card__content">
        <p className="card__date">
          {(() => {
            const date = new Date(article.publishedAt);
            return date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
          })()}
        </p>
        <h2 className="card__title">{article.title}</h2>
        <p className="card__content">{article.content}</p>
        <p className="card__source">
          {article.source?.name || "Unknown Source"}
        </p>
      </div>
    </li>
  );
}

export default NewsCard;
