import React, { Component } from "react";

class Header extends Component {
  state = {
    buttonPressed: false,
    insideButton: "+"
  }
  changeButton = () => {
    this.setState({buttonPressed: !this.state.buttonPressed})
    if(this.state.insideButton==="+"){
      this.setState({insideButton:"-"})
    }
    else if(this.state.insideButton==="-"){
      this.setState({insideButton:"+"});
    }
  }
  render() {
    console.log(this.state.buttonPressed);
    const button = <button onClick={this.changeButton}>{this.state.insideButton}</button>
    if(this.state.buttonPressed){
      return(
          <div id="social" className="col-md-4">
            {button}
            <div id="title" className="row">
              <h1>
              Social
              </h1>
            </div>
            <div id="socialNames" className="row">
              <div className="col-md-6">
                <h1>Twitter</h1>
              </div>
              <div className="col-md-6">
                <h1>Linkedin</h1>
              </div>
            </div>
          </div>
        )
    }
    else{
      return (
      <div id="header" className="col-md-4">
      {button}
        <h1>
        Baggio Shehadi
        </h1>
      </div>
    );
    }
  }
}
export default Header;
