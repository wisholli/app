import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import MusicPage from "./components/Music/Musicpage";
import NewsPage from "./components/NewsPage/NewsPage";
import MesageContainer from "./components/Message/MesageContainer";
import UsersContainer from "./components/FindUserPage/FindUsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
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
