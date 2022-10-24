import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Message from "./components/Message/Mesage";
import Musicpage from "./components/Music/Musicpage";
import store from "./redux/state";
import NewsPage from "./components/NewsPage/NewsPage";

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
                dispatch={store.dispatch.bind(store)}
                newPostText={props.state.posts.newPostText}
              />
            }
          ></Route>
          <Route
            exact
            path="/message"
            element={
              <Message
                items={props.state.users.data}
                dispatch={store.dispatch.bind(store)}
                searchUserName={props.state.users.searchUserName}
              />
            }
          ></Route>
          <Route
            exact
            path="/music"
            element={
              <Musicpage
                items={props.state.music.data}
                dispatch={store.dispatch.bind(store)}
                searchMusicName={props.state.music.searchMusicName}
              />
            }
          ></Route>
          <Route
            exact
            path="/news"
            element={
              <NewsPage
                items={props.state.news.data}
                dispatch={store.dispatch.bind(store)}
                searchNews={props.state.news.searchNews}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
