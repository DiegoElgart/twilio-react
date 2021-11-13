import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Textarea from "./components/common/Textarea";
import Form from "./components/common/Form";

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
          <Textarea label={"מספרי טלפון"}></Textarea>
          <Textarea label={"לינקים לסקרמספרי טלפון"}></Textarea>

          <button>שלח וואטספ</button>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
