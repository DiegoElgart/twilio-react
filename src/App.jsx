import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

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
        <Layout>
          <div>text area y un boton</div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
