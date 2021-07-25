import React from "react";

function Card(props) {
  return (
    <div
      className="card container "
      style={{ maxWidth: "800px", padding: "10px", marginBottom: "10px" }}
    >
      <div className="card-content">
        <div className="content">
          <h2>{props.name}</h2>
          <p>{props.email}</p>
          <p>{props.gender}</p>
          <p>{props.status}</p>
        </div>
        {props.email ? (
          <a href={`mailto:${props.email}`}>
            <span className="icon">
              <i class="fas fa-envelope-square"></i>
            </span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
