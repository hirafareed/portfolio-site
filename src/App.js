import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkList from "./pages/WorkList";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./sass/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/work-list" component={WorkList} />
        <Route path="/work/:name" component={WorkPage} />
        <Route path="/contact" component={ContactPage} />
      </div>
    </Router>
  );
}

export default App;
