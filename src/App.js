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
                store={props.store}
                dispatch={store.dispatch.bind(store)}
              />
            }
          ></Route>
          <Route
            exact
            path="/message"
            element={
              <Message
                store={props.store}
                dispatch={store.dispatch.bind(store)}
              />
            }
          ></Route>
          <Route
            exact
            path="/music"
            element={
              <Musicpage
                store={props.store}
                dispatch={store.dispatch.bind(store)}
              />
            }
          ></Route>
          <Route
            exact
            path="/news"
            element={
              <NewsPage
                store={props.store}
                dispatch={store.dispatch.bind(store)}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
