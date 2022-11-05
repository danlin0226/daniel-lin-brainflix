import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Hi"></img>
        <div className="header__container">
          <div className="header__search-cont">
            <img
              className="header__icon"
              alt="icon of a magnifying glass"
              src={searchIcon}
            ></img>
            <input
              className="header__search-bar"
              type="search"
              id="search"
              name="search"
              placeholder="Search"
            ></input>
          </div>
          <div className="header__button-cont header__button-cont--large-screen-hidden">
            <img
              className="header__icon"
              alt="icon with arrow facing up"
              src={uploadIcon}
            ></img>
            <button className="header__upload-button" href="#">
              UPLOAD
            </button>
          </div>
          <div className="header__avatar-cont">
            <img
              className="header__avatar"
              src={avatar}
              alt="profile shot of a man"
            ></img>
          </div>
        </div>
        <div className="header__button-cont header__button-cont--mobile-hidden">
          <img
            className="header__icon"
            alt="icon with arrow facing up"
            src={uploadIcon}
          ></img>
          <button className="header__upload-button" href="#">
            UPLOAD
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
