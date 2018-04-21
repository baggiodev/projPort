import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
class App extends Component {
  render() {
    return (
<div className="container">
  <Router>
  <div>
      <Navpills />
      <div className="row">
      <Header />
		      <div className="col-md-8 d-flex justify-content-center" id="main-content">
		      <Route exact path="/" component={Home} />
		      <Route exact path="/about" component={About} />
		      <Route exact path="/blog" component={Blog} />
		      <Route path="/contact" component={Contact} />
	      </div>
    </div>
   </div>
  </Router>
</div>
);
  }
}

export default App;