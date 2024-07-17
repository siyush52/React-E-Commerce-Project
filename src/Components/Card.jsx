import React, { useState } from "react";

const Card = ({ cart }) => {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }
  console.log("Total Price = ", totalPrice);
  return (
    <>
      <button>Total Price = {totalPrice}</button>
      {cart.map((product) => (
        <div className="Contain" key={Math.random()}>
          <h1>{product.title}</h1>
          <img className="imgg" src={product.imgSrc} alt="" />
        </div>
      ))}
    </>
  );
};

export default Card;
