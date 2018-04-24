import React, { Component } from "react";
import Projects from "../Project"

class Portfolio extends Component {
  state = {
    project: [{
      id:1,
      name:"Test1",
      info:"its good"
    },{
      id:2,
      name:"Test2",
      info:"its better"
    }]
  }

  componentDidMount = () => {

  }
  

  render() {
    return(
      <div className="col-md-11">
      <div className="row">
        <h1>Portfolio</h1>
      </div>
        <div id="projectHolder">
      {this.state.project.map(project => (
          <Projects
            id={project.id}
            key={project.id}
            name={project.name}
            info={project.info}
          />
        ))}
      </div>
      </div>

      )
  }
}
export default Portfolio;
