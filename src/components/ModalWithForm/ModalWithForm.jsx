import "./ModalWithForm.css";
import closeIcon from "../../assets/close.svg";

function ModalWithForm({
  children,
  title,
  isOpen,
  onCloseClick,
  buttonText,
  secondBtn,
  onSecondaryClick,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onCloseClick}
          type="button"
          className="modal__close-btn"
        >
          <img src={closeIcon} alt="Close" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__btns">
            <button type="submit" className="modal__submit-btn">
              {buttonText}
            </button>

            {secondBtn && (
              <button
                type="button"
                className="modal__submit-btn modal__submit_secondary-btn"
                onClick={onSecondaryClick}
              >
                or <span className="modal__secondary-action">{secondBtn}</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
