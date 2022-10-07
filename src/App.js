import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Message from "./components/Message/Mesage";
import {addPost, addUser} from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage items = { props.state.posts.data } addPost = {addPost} />}></Route>
          <Route exact path="/message" element={<Message items = { props.state.users.data} addNewUser = {addUser} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
