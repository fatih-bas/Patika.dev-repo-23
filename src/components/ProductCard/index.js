import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../redux/moneySlice";
import CountUp from "react-countup";

const ProductCard = ({ id }) => {
  const items = useSelector((state) => state.product.items);
  const amount = useSelector((state) => state.product.amount);
  const item = items.find((tmp) => tmp.id === id);
  const dispatch = useDispatch();

  const [count, setCount] = useState(item.count);

  let maxBuy = Math.floor(amount / item.productPrice);
  let max = Number(count) + Number(maxBuy);

  useEffect(() => {
    dispatch(updateCount({ id: item.id, count: count }));
  }, [count]);

  const buy = () => {
    handleChange(Number(count) + 1);
  };

  const sell = () => {
    handleChange(Number(count) - 1);
  };


  const handleChange = (value) => {
    if (value > max && amount > 0) {
      setCount(max);
    } else if (value < 0) {
      setCount(0);
    } else if (amount === 0 && value < count) {
      setCount(value);
    } else {
      setCount(value);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex flex-col bg-white mx-auto max-w-full h-96 p-8">
        <img className="w-42 h-40" src={item.image} alt={item.productName} />
        <h3 className="mt-2 text-2xl subpixel-antialiased font-semibold">
          {item.productName}
        </h3>
        <CountUp
          className="mt-2 mb-2 text-xl text-lime-400 subpixel-antialiased font-semibold"
          start={item.productPrice}
          prefix="$"
          separator=","
        />
        <div className="grid grid-cols-3 gap-4 ">
          {count > 0 ? (
            <button
              className="bg-red-600 text-white h-8 rounded subpixel-antialiased font-semibold"
              onClick={() => sell()}
            >
              Sell
            </button>
          ) : (
            <button className="bg-slate-300 h-8 rounded subpixel-antialiased font-semibold">
              Sell
            </button>
          )}
          <input
            type="text"
            className="text-center border-2 rounded"
            value={count}
            onChange={(e) => handleChange(e.target.value)}
          />
          {item.productPrice <= amount ? (
            <button
              className="bg-lime-400 h-8 rounded text-white subpixel-antialiased font-semibold"
              onClick={buy}
            >
              Buy
            </button>
          ) : (
            <button
              className="bg-slate-400 h-8 rounded text-white subpixel-antialiased font-semibold"
            >
              Buy
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
