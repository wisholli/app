import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import MusicPage from "./components/Music/Musicpage";
import NewsPage from "./components/NewsPage/NewsPage";
import MesageContainer from "./components/Message/MesageContainer";
import UsersContainer from "./components/FindUserPage/FindUsersContainer";
import HomepageContainer from "./components/Homepage/HomepageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <Routes>
          <Route path="/" element={<HomepageContainer />}>
            <Route path=":userId" element={<HomepageContainer />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route exact path="/message" element={<MesageContainer />}></Route>
          <Route exact path="/music" element={<MusicPage />}></Route>
          <Route exact path="/news" element={<NewsPage />}></Route>
          <Route exact path="/findusers" element={<UsersContainer />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
