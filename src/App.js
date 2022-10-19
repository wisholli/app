import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Message from "./components/Message/Mesage";
import Musicpage from "./components/Music/Musicpage";
import store from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Homepage
                items={props.state.posts.data}
                addPost={store.addPost.bind(store)}
                newPostText={props.state.posts.newPostText}
                updateNewPostText={store.updateNewPostText.bind(store)}
              />
            }
          ></Route>
          <Route
            exact
            path="/message"
            element={
              <Message
                items={props.state.users.data}
                deleteUser={store.deleteUser.bind(store)}
                searchUser={store.searchUser.bind(store)}
                searchUserName={props.state.users.searchUserName}
                updateSearchUserName={store.updateSearchUserName.bind(store)}
              />
            }
          ></Route>
          <Route
            exact
            path="/music"
            element={
              <Musicpage
                items={props.state.music.data}
                searchMusic={store.searchMusic.bind(store)}
                deleteMusic={store.deleteMusic.bind(store)}
                searchMusicName={props.state.music.searchMusicName}
                updateSearchMusicName={store.updateSearchMusicName.bind(store)}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
