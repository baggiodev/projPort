import React, {Component} from "react";
import axios from "axios";

class Contact extends Component {
    state = {
        email: "",
        name: "",
        message: "",
        phoneNum: "",
        birthday: "",
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
        if (name === "phoneNum") {
            value = value.replace(/\D/g, "");
            // Trim the remaining value to ten characters, to preserve phone number format
            value = value.substring(0, 10);
            // Based upon the length of the string, we add formatting as necessary
            let size = value.length;
            if (size === 0) {} else if (size < 4) {
                value = "(" + value;
            } else if (size < 6) {
                value = "(" + value.substring(0, 3) + ") " + value.substring(3, 6);
            } else {
                value = "(" + value.substring(0, 3) + ") " + value.substring(3, 6) + "-" + value.substring(6, 10);
            }
        } else if (name === "birthday") {
            value = value.replace(/\D/g, "");
            value = value.substring(0, 8);
            let size = value.length;
            if (size === 0) {} else if (size < 2) {
                value = `${value}`
            } else if (size < 4) {
                value = `${value.substring(0, 2)}/${value.substring(2, 4)}`
            } else {
                value = `${value.substring(0, 2)}/${value.substring(2, 4)}/${value.substring(4, 8)}`
            }
        }
        // Updating the input's state
        this.setState({[name]: value});
    };

    handleEmail = () => {
        if (this.state.emailFail === false) {
            return (<input
                value={this.state.email}
                name="email"
                onChange={this.handleInputChange}
                type="text"
                placeholder="E-mail *required"/>)
        } else if (this.state.emailFail === true) {
            return (<input
                value={this.state.email}
                name="email"
                id="emailFail"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Incorrect E-mail format."/>)
        }
    }
    handleFormSubmit = event => {
        event.preventDefault()
        if (this.validateEmail(this.state.email)) {
            axios
                .post("/api/contact", {
                email: this.state.email,
                name: this.state.name,
                message: this.state.message
            })
                .then(() => {
                    this.setState({email: "", name: "", message: "", emailSent: true})
                })
        } else {
            this.setState({emailFail: true})
        }
    }
    render() {
        if (!this.state.emailSent) {
            return (
                <div id="contactDiv">
                    <h1>
                        Contact Me!
                    </h1>
                    <form className="form">{this.handleEmail()}
                        <br></br>
                        <input
                            value={this.state.name}
                            name="name"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Name"/>
                        <br></br>
                        <input
                            value={this.state.birthday}
                            name="birthday"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Birthday"/>
                        <br></br>
                        <input
                            value={this.state.phoneNum}
                            format="(###) ###-####"
                            name="phoneNum"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Phone Number"
                            mask=""/>
                        <br></br>
                        <textarea
                            value={this.state.message}
                            name="message"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Message"
                            id="messageContent"/>
                        <br></br>
                        <button className="btn" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
            )
        } else {
            return (
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
