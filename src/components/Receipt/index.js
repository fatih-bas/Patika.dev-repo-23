import React from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";

const Receipt = () => {
  const items = useSelector((state) => state.product.items);
  const filtered = items.filter((item) => item.count > 0);
  let totalProductPrice = 0;
  filtered.map((item) => {
    return (totalProductPrice += item.productPrice * item.count);
  });
  if (filtered.length === 0) {
    return null;
  }
  return (
    <div className="container mx-auto  text-center mt-3 bg-white p-5 max-h-max">
      <h1 className="text-4xl subpixel-antialiased mb-5 font-semibold">
        Your Receipt
      </h1>

      <div className="w-2/5 grid grid-cols-1 mx-auto border-b border-black">
        <ul className="flex flex-col ">
          {filtered.map((item) => (
            <li
              key={item.id}
              className=" grid grid-cols-3 subpixel-antialiased regular justify-center"
            >
              <div className="text-left">{item.productName}</div>

              <div className="text-center w-1/2">X{item.count}</div>

              <div className="text-right text-lime-400 subpixel-antialiased font-semibold">
                <CountUp
                  start={item.count * item.productPrice}
                  prefix="$"
                  separator=","
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/5 mx-auto grid grid-cols-2 p-3 mt-2">
        <h1 className="subpixel-antialiased text-lg text-left font-semibold">
          TOTAL
        </h1>
        <div className="text-lime-400 ml-8 subpixel-antialiased font-bold text-lg text-right">
          <CountUp start={totalProductPrice} prefix="$" separator="," />
        </div>
      </div>
    </div>
  );
};

export default Receipt;
