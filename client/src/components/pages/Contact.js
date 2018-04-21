import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    email: "",
    name: "",
    message: "",
    emailFail: false,
    emailSent: false
  }
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    console.log(this.state);
    if (name === "message") {
      value = value.substring(0, 1000);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleEmail = () => {
    if(this.state.emailFail===false){
          return(<input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="E-mail *required"
          />)
        }
        else if(this.state.emailFail===true){
          return(<input
            value={this.state.email}
            name="email"
            id="emailFail"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Incorrect E-mail format."
          />)
        }
  }
  handleFormSubmit = event => {
    event.preventDefault()
    if(this.validateEmail(this.state.email)){
      axios.post("/api/contact",{
        email:this.state.email,
        name:this.state.name,
        message:this.state.message
      }).then(data =>{
      this.setState({
        email: "",
        name: "",
        message: "",
        emailSent: true
      })
    })
  }else{
    this.setState({emailFail:true})
  }
  }
  render() { if(!this.state.emailSent){
    return(
    <div id="contactDiv">
        <h1>
          Contact Me!
        </h1>
        <form className="form">{this.handleEmail()}<br></br>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          /><br></br>
          <textarea
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
            id="messageContent"
          /><br></br>
          <button className="btn" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
  else{ 
    return(
    <div id="contactDiv">
        <h1>
          Thank you!
        </h1>
    </div>
    )
  }
}
}
export default Contact;
