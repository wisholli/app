import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route exact path="menu/:id" element={<h1 >item</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
