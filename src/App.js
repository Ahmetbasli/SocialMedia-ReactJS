import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { authentication } from "./firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const returnMainPage = () => (
    <div className="app__bodyContainer">
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* app body */}
        <Widgets />
      </div>
    </div>
  );

  useEffect(() => {
    authentication.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        console.log("stateChanged", userAuth);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      <Header />

      {user === null ? <Login /> : returnMainPage()}
    </div>
  );
}

export default App;
