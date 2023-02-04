import React from "react";
import CardComponent from "./CardComponent";
import { data } from "./utils";

export default function Cards() {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          {data.map((value) => (
            <CardComponent title={value.title} imageUrl={value.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
