import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import userService from "./services/userService";

class App extends Component {
  state = {};

  async componentDidMount() {
    const user = userService.getCurrentUser();
    if (user) {
      const userName = await userService.getUserData(user.id);
      this.setState({ user, userName });
    }
  }

  render() {
    const { user } = this.state;
    const { userName } = this.state;
    return (
      <React.Fragment>
        <header>
          <Navbar user={user} userName={userName} />
        </header>
        <main style={{ minHeight: 900 }}>
          <Routes>
            <Route path='/' exact component={Home} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
