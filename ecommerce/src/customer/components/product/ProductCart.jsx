import React from "react";
import "./ProductCart.css";

const ProductCart = ({product}) => {
  return (
    <div className=" productCard w-[15rem] m-3 transition-all cursor-pointer hover:shadow-2xl  rounded-xl">
      <div className=" h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top rounded-md"
          src={product.imageUrl}
          alt="anyany"
        />
          </div>
          <div className=" textPart bg-white p-3 ">
              <div className=" ">
                  <p className=" font-bold opacity-60  ">{product.brand }</p>
                  <p> {product.title} </p>
              </div>
              <div className=" flex items-center space-x-3">
                  <p className=" font-semibold">
                  {product.discountedPrice}
                  </p>
                  <p className=" line-through opacity-50"> {product.price} </p>
                  <p className=" text-green-600 font-semibold"> {product.discountPersent} % Off </p>
              </div>
          </div>
    </div>
  );
};

export default ProductCart;
