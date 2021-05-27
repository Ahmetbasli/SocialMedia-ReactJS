import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">{message}</div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" />
        <InputOption Icon={ChatIcon} title="Comment" />
        <InputOption Icon={ShareIcon} title="Share" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;
