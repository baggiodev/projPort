import React, { Component } from "react";

class Header extends Component {
  state = {
    buttonPressed: false
  }
  changeButton = () => {
    this.setState({buttonPressed: !this.state.buttonPressed})
  }
  render() {
    console.log(this.state.buttonPressed);
    const button = <button onClick={this.changeButton} />
    if(this.state.buttonPressed){
      return(
          <div id="header" className="col-md-4">
  {button}
    <h1>
    Social
    </h1>
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
