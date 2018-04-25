import React, { Component } from "react";
import Projects from "../Project"

class Portfolio extends Component {
  state = {
    project: [{
      id:1,
      name:"Test 1",
      info:"its good",
      preview:"",
      link:""
    },{
      id:2,
      name:"Test 2",
      info:"its better",
      preview:"",
      link:""
    },{
      id:3,
      name:"Test 3",
      info:"its better",
      preview:"",
      link:""
    },{
      id:4,
      name:"Test 4",
      info:"its better",
      preview:"",
      link:""
    },{
      id:5,
      name:"Test 5",
      info:"its better",
      preview:"",
      link:""
    },{
      id:6,
      name:"Test 6",
      info:"its better",
      preview:"",
      link:""
    },{
      id:7,
      name:"Test 7",
      info:"its better",
      preview:"",
      link:""
    },{
      id:8,
      name:"Test 8",
      info:"its better",
      preview:"",
      link:""
    },{
      id:9,
      name:"Test 9",
      info:"its better",
      preview:"",
      link:""
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
