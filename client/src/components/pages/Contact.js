import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    email: "",
    name: "",
    message: ""
  }
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "message") {
      value = value.substring(0, 1000);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event =>{
    var weGood = false;
    if(weGood){
      axios.post("/api/contact",{
        email:this.state.email,
        name:this.state.name,
        message:this.state.message
      }).then(data =>{
      this.setState({
        email: "",
        name: "",
        message: ""
      })
    })
  }
  }
  render() {
    return(
    <div>
        <h1>
          Contact Me!
        </h1>
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="E-mail"
          /><br></br>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          /><br></br>
          <input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Message"
            id="messageContent"
          /><br></br>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default Contact;
