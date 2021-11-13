import React, { Component } from "react";
import Input from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
renderButton(label){
    return (<button disabled={}>{label}</button>)
}

renderInput(name,label, type="text"){
    const {data,errors}= this.state;

    return (<Input type={type} name={name} value={data[name]} label={label} onChange={this.handleChange} errors={errors[name]}/>)

}
}

export default Form;
