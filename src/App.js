import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import Testimonial from "./components/Testimonial/Testimonial";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="menu" element={<Menu />}></Route>
          <Route exact path="menu/:id" element={<h1 >item</h1>}></Route>
          <Route exact path="testimonial" element={<Testimonial testimonials = { props.state.testimonialPage.testimonials }/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
