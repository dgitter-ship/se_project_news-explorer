import { useState } from "react";
import "./SignIn.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignIn({ isOpen, onCloseClick, onSignUpClick, onSignIn }) {
  const [data, setData] = useState({
    email: "",
    password: "",
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
    // Call the sign-in function passed from parent
    onSignIn(data);
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      title="Sign in"
      buttonText="Sign in"
      secondBtn=" or Sign up"
      onCloseClick={onCloseClick}
      onSecondaryClick={onSignUpClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="email"
          value={data.email}
          placeholder="Email"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="password"
          className="modal__input"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default SignIn;
