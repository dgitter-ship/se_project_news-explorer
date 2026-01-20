import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";

function Main({}) {
  return (
    <main>
      <SearchForm />
      <section className="cards">
        <p className="cards__text">Search results</p>
      </section>
    </main>
  );
}

export default Main;
