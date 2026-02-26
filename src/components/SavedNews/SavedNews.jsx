import "./SavedNews.css";
import Navigation from "../Navigation/Navigation";
import NewsCard from "../NewsCard/NewsCard";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SavedNews({
  isLoggedIn,
  userData,
  savedArticles,
  onRemoveArticle,

  activeModal,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderKeyWords = () => {
    const terms = savedArticles.map((item) => item.searchTerm);
    const uniqueTerms = [...new Set(terms)];

    return <>{uniqueTerms.join(", ")}</>;
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`saved-news__header${menuOpen ? " saved-news__header--menu-open" : ""}`}
      >
        <Link to="/">
          <h1
            className={`saved-news__logo${menuOpen ? " saved-news__logo--menu-open" : ""}`}
          >
            NewsExplorer
          </h1>
        </Link>
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
