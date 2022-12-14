import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MusicPage from "./components/Music/Musicpage";
import NewsPage from "./components/NewsPage/NewsPage";
import Login from "./components/Login/Login";
import React, { Suspense, useEffect } from "react";
import { initializeApp } from "./redux/appReducer";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import Header from "./components/Header/Header";
import Message from "./components/Message/Mesage";
import Settings from "./components/SettingsPage/Settings";
import { PrivateRoute } from "./hoc/PrivateRoute";

const Homepage = React.lazy(() => import("./components/Homepage/Profile"));
const Users = React.lazy(() =>
  import("./components/FindUserPage/FindUsersPage")
);

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!data.initialized) {
    return <Preloader />;
  }
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Homepage />
                </PrivateRoute>
              }
            >
              <Route path=":userId" element={<Homepage />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/message"
              element={
                <PrivateRoute>
                  <Message />
                </PrivateRoute>
              }
            ></Route>
            <Route exact path="/music" element={<MusicPage />}></Route>
            <Route exact path="/news" element={<NewsPage />}></Route>
            <Route exact path="/findusers" element={<Users />}></Route>
            <Route
              exact
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;

//1) Material UI
//2) Tailwind
