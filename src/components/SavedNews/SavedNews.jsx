import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";

import { useState } from "react";

function SavedNews({
  isLoggedIn,
  userData,
  savedArticles,
  onRemoveArticle,
  isSavedNewsPage,
  activeModal,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderKeyWords = () => {
    const terms = savedArticles.map((item) => item.searchTerm);
    const uniqueTerms = [...new Set(terms)];

    return <>{uniqueTerms.join(", ")}</>;
  };

  return (
    <>
      <header
        className={`saved-news__header${menuOpen ? " saved-news__header--menu-open" : ""}`}
      >
        <h1
          className={`saved-news__logo${menuOpen ? " saved-news__logo--menu-open" : ""}`}
        >
          NewsExplorer
        </h1>
        <Navigation
          isLoggedIn={isLoggedIn}
          userData={userData}
          isSavedNewsPage={true}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          modalOpen={!!activeModal}
        />
      </header>

      <div className="saved-news__content">
        <p className="saved-news__title">Saved articles</p>
        <h1 className="saved-news__message">
          {userData.name}, you have {savedArticles.length} saved<br></br>{" "}
          articles
        </h1>
        <p className="saved-news__keywords">
          By keywords:
          <b>{renderKeyWords()}</b>
        </p>
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
