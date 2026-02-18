import "./Main.css";
import notFoundImg from "../../assets/not-found.svg";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

function Main({
  handleSearch,
  hasSearched,
  isLoading,
  articles,
  errorMessage,
  onSaveArticle,
  setSearchTerm,
}) {
  const [visibleCards, setVisibleCards] = useState(3);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  const handleSaveArticle = (article) => {
    setSavedArticles([...savedArticles, article.url]);
    onSaveArticle(article);
  };

  const handleRemoveArticle = (article) => {
    setSavedArticles(savedArticles.filter((url) => url !== article.url));
  };

  return (
    <main>
      <SearchForm handleSearch={handleSearch} setSearchTerm={setSearchTerm} />
      {hasSearched && (
        <section className="cards">
          {!errorMessage && <p className="cards__text">Search results</p>}

          {isLoading && <Preloader />}

          {!isLoading && errorMessage && (
            <div className="cards__nothing-found">
              <img
                src={notFoundImg}
                alt="Nothing Found Image"
                className="cards__nothing-found_img"
              />
              <h2 className="cards__nothing-found_caption">Nothing found</h2>
              <p className="cards__nothing-found_text">
                Sorry, but nothing matched <br></br> your search terms.
              </p>
            </div>
          )}

          {!isLoading && !errorMessage && articles.length > 0 && (
            <>
              <ul className="cards__list">
                {articles.slice(0, visibleCards).map((article) => {
                  return (
                    <NewsCard
                      key={article.id}
                      article={article}
                      onSaveArticle={handleSaveArticle}
                      onRemoveArticle={handleRemoveArticle}
                      isSaved={savedArticles.includes(article.url)}
                      isMainPage={true}
                    />
                  );
                })}
              </ul>
              {visibleCards < articles.length && (
                <button className="cards__btn" onClick={handleShowMore}>
                  Show more
                </button>
              )}
            </>
          )}
        </section>
      )}
      <About />
    </main>
  );
}

export default Main;
