import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}

      {avatar && (
        <Avatar src={avatar} className="headerOption__avatar">
          {avatar}
        </Avatar>
      )}
      {avatar === null && (
        <Avatar src={avatar} className="headerOption__avatar"></Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
