import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { getNews } from "../../utils/newsApi";
import SavedNews from "../SavedNews/SavedNews";
import { signin, signup } from "../../utils/auth";

function App() {
  const location = useLocation();
  const [activeModal, setActiveModal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [articles, setArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleSaveArticle = (article) => {
    setSavedArticles((prevSavedArticles) => [
      ...prevSavedArticles,
      { ...article, searchTerm },
    ]);
  };
  console.log("Saved articles:", savedArticles);
  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUserData({ email: "", password: "", name: "" });
  };

  const handleLogin = (data) => {
    signin(data)
      .then((res) => {
        setIsLoggedIn(true);
        setUserData(res.user);
        closeActiveModal();
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  const handleSignUp = (data) => {
    signup({
      name: data.username || data.name,
      avatar: "", // Add avatar if needed
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        setUserData(res.user);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  const handleRemoveArticle = (article) => {
    setSavedArticles(savedArticles.filter((a) => a.url !== article.url));
  };

  const onSignUpClick = () => {
    console.log("Sign up btn clicked");
    setActiveModal("Sign up");
  };

  const onSignInClick = () => {
    console.log("Sign in btn clicked");
    setActiveModal("Sign in");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSearch = (searchTerm) => {
    console.log("User searched for:", searchTerm);
    if (searchTerm.trim() === "") {
      setErrorMessage("Nothing Found");
      return;
    }
    // Clear any previous error
    setErrorMessage("");
    setArticles([]);
    setIsLoading(true);
    setHasSearched(true);

    getNews(searchTerm)
      .then((articles) => {
        if (articles.length === 0) {
          return setErrorMessage("Nothing Found");
        } else {
          setArticles(articles);
        }
      })
      .catch((error) =>
        setErrorMessage(
          "Sorry, something went wrong during the request. Please try again later.",
          error,
        ),
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="page">
      <div
        className={`page__content ${
          location.pathname === "/saved-news"
            ? "page__content--no-background"
            : ""
        }`}
      >
        {location.pathname === "/" && (
          <Header
            onSignInClick={onSignInClick}
            isLoggedIn={isLoggedIn}
            userData={userData}
            handleSignOut={handleSignOut}
            activeModal={activeModal}
            onCloseClick={closeActiveModal}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Main
                hasSearched={hasSearched}
                handleSearch={handleSearch}
                isLoading={isLoading}
                articles={articles}
                errorMessage={errorMessage}
                onSaveArticle={handleSaveArticle}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNews
                isLoggedIn={isLoggedIn}
                userData={userData}
                handleSignOut={handleSignOut}
                savedArticles={savedArticles}
                onRemoveArticle={handleRemoveArticle}
                activeModal={activeModal}
              />
            }
          />
        </Routes>

        <SignIn
          isOpen={activeModal === "Sign in"}
          onCloseClick={closeActiveModal}
          onSignUpClick={onSignUpClick}
          onSignIn={handleLogin}
        />
        <SignUp
          isOpen={activeModal === "Sign up"}
          onCloseClick={closeActiveModal}
          onSignInClick={onSignInClick}
          onSignUp={handleSignUp}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
