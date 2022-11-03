import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Hi"></img>
        <div className="header__container">
          <input
            className="header__search-bar"
            type="search"
            id="search"
            name="search"
          ></input>
          <a
            className="header__upload-button header__upload-button--mobile-hidden"
            href="#call to action"
          >
            UPLOAD
          </a>
          <div className="header__avatar-cont">
            <img
              className="header__avatar"
              src={avatar}
              alt="profile shot of a man"
            ></img>
          </div>
        </div>
        <div className="header__button-cont">
          <img
            className="header__upload-icon"
            alt="icon with arrow facing up"
            src={uploadIcon}
          ></img>
          <a
            className="header__upload-button header__upload--mobile-visible"
            href="#call to action"
          >
            UPLOAD
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
