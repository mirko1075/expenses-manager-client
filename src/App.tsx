import * as React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import IndexPage from "./pages/index";
import EditPage from "./pages/edit";
import AddPage from "./pages/add";

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/index"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/add" element={AddPage} />
          <Route path="/edit/:id" element={EditPage} />
          <Route path="/index" element={IndexPage} />
          <Route path="/" element={IndexPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
