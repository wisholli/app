import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MusicPage from "./components/Music/Musicpage";
import NewsPage from "./components/NewsPage/NewsPage";
import MesageContainer from "./components/Message/MesageContainer";
// import UsersContainer from "./components/FindUserPage/FindUsersContainer";
// import HomepageContainer from "./components/Homepage/HomepageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, { Suspense } from "react";
import { initializeApp } from "./redux/appReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

const HomepageContainer = React.lazy(() =>
  import("./components/Homepage/HomepageContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/FindUserPage/FindUsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Nav />
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomepageContainer />}>
                <Route path=":userId" element={<HomepageContainer />}></Route>
              </Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                exact
                path="/message"
                element={<MesageContainer />}
              ></Route>
              <Route exact path="/music" element={<MusicPage />}></Route>
              <Route exact path="/news" element={<NewsPage />}></Route>
              <Route
                exact
                path="/findusers"
                element={<UsersContainer />}
              ></Route>
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({ initialized: state.app.initialized });

export default compose(connect(mapStateToProps, { initializeApp }))(App);
