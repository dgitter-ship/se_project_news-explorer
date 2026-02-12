import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch, setSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue);
    setSearchTerm(inputValue);
  };

  return (
    <>
      <section className="form">
        <h1 className="form__header">
          Whats going on in<br></br> the world?
        </h1>
        <h2 className="form__content">
          Find the news on any topic and save them in your personal account
        </h2>
        <form onSubmit={onSubmit} className="form__searchbar">
          <input
            type="search"
            className="form__input"
            placeholder="Yellowstone"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="form__submit-btn">
            Search
          </button>
        </form>
      </section>
    </>
  );
}

export default SearchForm;
