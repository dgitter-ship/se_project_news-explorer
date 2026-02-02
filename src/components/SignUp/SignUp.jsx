import { useState } from "react";
import "./SignUp.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUp({ isOpen, onSignInClick, onCloseClick, onSignUp }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSignUp(data);
    setData({
      email: "",
      password: "",
      name: "",
    });
  };

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      onCloseClick={onCloseClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      secondBtn="Sign in"
      onSecondaryClick={onSignInClick}
    >
      <label htmlFor="email-signup" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="email-register"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
          required
        />
      </label>
      <label htmlFor="password-signup" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="password-register"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
          required
        />
      </label>
      <label htmlFor="name-signup" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="username-signup"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default SignUp;
