import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import http from "../services/httpService";
import userService from "../services/userService";
import { apiUrl } from "../config.json";
import { Redirect } from "react-router-dom";

class Signup extends Form {
  state = {
    data: { email: "", password: "", firstName: "", lastName: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(2).label("Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    const { email, password } = this.state.data;

    try {
      await http.post(`${apiUrl}/signup`, data);
      await userService.login(email, password);

      alert("A new account is opened!");
      this.props.history.replace("/add/dog");
      window.location.reload();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: "Email is taken" } });
      }
    }
  };

  render() {
    //if (userService.getCurrentUser()) return <Redirect to='/' />;
    return (
      <div className=''>
        <div className='row'>
          <div className='col-12'>
            <p>You can open new account for free!</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={this.handleSubmit} autoComplete='off' method='POST'>
              {this.renderInput("name", "Name")}
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("להירשם")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
