import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({
  isLoggedIn,
  userData,
  savedArticles,
  onRemoveArticle,
  isSavedNewsPage,
}) {
  return (
    <>
      <header className="saved-news__header">
        <h1 className="saved-news__logo">NewsExplorer</h1>
        <Navigation
          isLoggedIn={isLoggedIn}
          userData={userData}
          isSavedNewsPage={true}
        />
      </header>

      <div className="saved-news__content">
        <p className="saved-news__title">Saved articles</p>
        <h1 className="saved-news__message">
          {userData.name}, you have 5 saved<br></br> articles
        </h1>
        <p className="saved-news__keywords">By keywords:</p>
        <ul className="saved-news__list">
          {savedArticles.map((article) => (
            <NewsCard
              key={article.url}
              article={article}
              onRemoveArticle={onRemoveArticle}
              isSaved={true}
              isMainPage={false}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default SavedNews;
