import React, { Component } from "react";
import axios from "axios";
import TweetCard from "./TweetCard";

class Header extends Component {
  state = {
    buttonPressed: false,
    insideButton: "+",
    tweets: []
  }
  componentDidMount = () => {
    this.apiCall();
  }
  apiCall = () => {
  axios.get("/api/twitter").then((data) => this.setState({tweets:data.data}))
  }
  changeButton = () => {
    console.log(this.state.tweets);
    this.setState({buttonPressed: !this.state.buttonPressed})
    if(this.state.insideButton==="+"){
      this.setState({insideButton:"-"})
    }
    else if(this.state.insideButton==="-"){
      this.setState({insideButton:"+"});
    }
  }
  render() {
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
                <h1>Github</h1>
                <h1><a target="_blank" rel="noopener noreferrer" href="https://github.com/bshehadi"><i className="fab fa-github fabLogo"></i></a></h1>
              </div>
              <div className="col-md-6">
                  <h1>Linkedin</h1>
                  <h1><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/baggio-shehadi"><i className="fab fa-linkedin fabLogo"></i></a></h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <h1>Twitter 
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/baggio_shehadi">
                  <i className="fab fa-twitter fabLogo"></i>
                  </a>
                  </h1>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
              {this.state.tweets.map(tweet => (
          <TweetCard
            id={tweet.id}
            key={tweet.id}
            created_at={tweet.created_at}
            text={tweet.text}
          />
        ))}
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
