import React from "react";
import CardComponent from "./CardComponent";
import { data } from "./utils";

export default function Cards() {
  // let cardArray = [
  //   {
  //     title: "card1",
  //     imageUrl:
  //       "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  //   {
  //     title: "Card2",
  //     imageUrl:
  //       "https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  //   {
  //     title: "Card3",
  //     imageUrl:
  //       "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  //   {
  //     title: "Card4",
  //     imageUrl:
  //       "https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  // ];
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          {data.map((value) => {
            return (
              <CardComponent title={value.title} imageUrl={value.imageUrl} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
