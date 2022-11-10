import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/icons/upload.svg";
import searchIcon from "../../assets/images/icons/search.svg";
import "./Header.scss";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src={logo} alt="Hi"></img>
        </Link>
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
          <div className="header__avatar-cont">
            <img
              className="header__avatar"
              src={avatar}
              alt="profile shot of a man"
            ></img>
          </div>
          <div className="header__line-break"></div>
          <div className="header__button-cont">
            <img
              className="header__icon"
              alt="icon with arrow facing up"
              src={uploadIcon}
            ></img>
            <Link to="/upload" className="header__upload-button-link">
              <button className="header__upload-button">UPLOAD</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
