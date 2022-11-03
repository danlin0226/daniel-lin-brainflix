import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import "./Avatar.scss";

export default function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__cont">
        <img
          className="avatar__img"
          src={avatar}
          alt="display picture of user"
          onError={(i) => (i.target.style.display = "none")}
        />
      </div>
    </div>
  );
}
