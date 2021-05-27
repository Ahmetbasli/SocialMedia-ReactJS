import CreateIcon from "@material-ui/icons/Create";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import PhotoIcon from "@material-ui/icons/Photo";
import VideocamIcon from "@material-ui/icons/Videocam";
import TodayIcon from "@material-ui/icons/Today";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption
            icon_class_name="feed__inputOptions__photoIcon"
            Icon={PhotoIcon}
            title="Photo"
          />
          <InputOption
            icon_class_name="feed__inputOptions__videoIcon"
            Icon={VideocamIcon}
            title="Video"
          />
          <InputOption
            class_name="feed__inputOptions__eventIcon"
            Icon={TodayIcon}
            title="Event"
          />
          <InputOption
            icon_class_name="feed__inputOptions__writeArticleIcon"
            Icon={CalendarViewDayIcon}
            title="Write article"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
