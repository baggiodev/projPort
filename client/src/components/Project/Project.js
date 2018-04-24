import React from "react";

const Project = props => (
  <div className="row">
  <div className="card project col-md-12">
    <div className="project-container">
    <div className="content">
      <ul>
        <li>
          <strong>Project:</strong> {props.name}
        </li>
        <li>
          <strong>About: </strong> {props.info}
        </li>
      </ul>
    </div>
    </div>
  </div>
  </div>
);

export default Project;
