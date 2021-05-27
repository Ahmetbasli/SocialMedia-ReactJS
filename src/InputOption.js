import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, icon_class_name }) {
  //class names have imported from feed.js
  return (
    <div className="inputOption">
      {Icon && <Icon className={icon_class_name} />}
      <h3 className="inputOption__title">{title}</h3>
    </div>
  );
}

export default InputOption;
