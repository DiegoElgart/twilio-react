import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Navbar from "./components/navbar";
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
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
