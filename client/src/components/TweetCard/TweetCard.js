import React from "react";

const TweetCard = props => (
  <div className="card">
    <div className="img-container">
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Tweet:</strong> {props.text}
        </li>
        <li>
          <strong>Created at:</strong> {props.created_at}
        </li>
      </ul>
    </div>
  </div>
);

export default TweetCard;
