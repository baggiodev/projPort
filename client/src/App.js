import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

const App = () => (
<div className="container">
  <Router>
  <div>
      <Navpills />
      <div className="row">
	      <div className="col-md-4">
	      </div>
	      <div className="col-md-8">
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

export default App;
