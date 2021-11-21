import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";

const styles = {
  layout: {
    backGroundColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Navbar />
        </header>

        <main style={{ minHeight: 900 }}>
          <Routes>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' exact component={Home} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
