import React from "react";

export default function CardComponent(props) {
  return (
    <div className="col-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
