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
            href="#"
          >
            UPLOAD
          </a>
          <div className="header__avatar-cont">
            <img className="header__avatar" src={avatar}></img>
          </div>
        </div>
        <div className="header__button-cont">
          <img className="header__upload-icon" src={uploadIcon}></img>{" "}
          <a
            className="header__upload-button header__upload--mobile-visible"
            href="#"
          >
            UPLOAD
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
