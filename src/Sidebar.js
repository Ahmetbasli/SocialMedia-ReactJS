import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="siderbar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstO9zTbq_O8uYOUeavLBAe-L6C8esV_XO4g&usqp=CAU"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.displayName && user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4> {user.email} </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post </p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>recent</p>
        {recentItem("Design")}
        {recentItem("Software Engineering")}
        {recentItem("programing")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
