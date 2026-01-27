import { useState } from "react";
import "./SignUp.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignUp({ isOpen, onSignInClick, onCloseClick }) {
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

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      //   activeModal={activeModal}
      onCloseClick={onCloseClick}
      isOpen={isOpen}
      //   onSubmit={handleSubmit}
      secondBtn="or Sign in"
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
          value={data.username}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default SignUp;
