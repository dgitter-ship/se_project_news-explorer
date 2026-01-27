import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ isLoggedIn, userData }) {
  return (
    <>
      <header className="saved-news__header">
        <h1 className="saved-news__logo">NewsExplorer</h1>
        <Navigation isLoggedIn={isLoggedIn} userData={userData} />
      </header>

      <div className="saved-news__content">
        <p className="saved-news__title">Saved articles</p>
        <h1 className="saved-news__message">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-news__keywords">By keywords:</p>
      </div>
      <NewsCard />
    </>
  );
}

export default SavedNews;
