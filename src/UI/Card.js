import React from "react";

function Card(props) {
  return (
    <div class="card">
      <div class="card-content">
        <div class="content">
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
