import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2>{props.name}</h2>
          <p>{props.email}</p>
          <p>{props.gender}</p>
          <p>{props.status}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
