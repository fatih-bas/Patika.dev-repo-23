import React from "react";
import { updateCount } from "../../redux/moneySlice";
import { useSelector } from "react-redux";

const Button = ({buy, sell, handleChange, count}) => {
  return (
    <div>
          <button
            className="bg-slate-200 w-20 h-8 rounded subpixel-antialiased font-semibold "
            onClick={() => sell()}
          >
            Sell
          </button>
          <input
            type="text"
            className="text-center w-16 border-2 rounded ml-2"
            value={count}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button
            className="bg-lime-400 w-20 h-8 rounded ml-2 subpixel-antialiased font-semibold"
            onClick={buy}
          >
            Buy
          </button>
        </div>
  );
};

export default Button;
