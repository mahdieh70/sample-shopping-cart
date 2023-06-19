import React from "react";
import { getFirstTwoCharact } from "../../utiles/getFirstTwoCharact";


const Card = ({ image, title, price }) => {
 
  return (
    <div className="h-[320px] bg-white border border-solid shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <img src={image} alt={title} className="mx-auto h-1/2" />
      <div className="h-1/2 flex flex-col justify-center">
        <h2 className="text-[16px] font-bold">{getFirstTwoCharact(title)}</h2>
        <div className="flex justify-between mt-9 items-center">
          <p>{price} $</p>
          <button
            type="button"
          
            className="bg-green-500 h-[48px] px-5 text-[14px] text-white cursor-pointer rounded-xl"
          >
            Add to cart
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
