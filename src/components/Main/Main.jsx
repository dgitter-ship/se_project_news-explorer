import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import { defaultArticles } from "../../utils/constants";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

function Main({
  handleSearch,
  hasSearched,
  isLoading,
  articles,
  errorMessage,
}) {
  const [visibleCards, setVisibleCards] = useState(3);

  const handleShowMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <main>
      <SearchForm handleSearch={handleSearch} />
      {hasSearched && (
        <section className="cards">
          <p className="cards__text">Search results</p>

          {isLoading && (
            <div>Loading...</div> // You'll replace this with <Preloader /> later
          )}

          {!isLoading && errorMessage && (
            <div className="cards__error">{errorMessage}</div>
          )}

          {!isLoading && !errorMessage && articles.length === 0 && (
            <div className="cards__nothing-found">Nothing found</div>
          )}

          {!isLoading && !errorMessage && articles.length > 0 && (
            <>
              <ul className="cards__list">
                {articles.slice(0, visibleCards).map((article) => {
                  return <NewsCard key={article.id} article={article} />;
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
      ;
      <About />
    </main>
  );
}

export default Main;
