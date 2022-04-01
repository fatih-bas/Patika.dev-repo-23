import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";



const PriceBar = () => {
  const items = useSelector(state => state.product.items);
  const amount = useSelector(state => state.product.amount);

  const [prevAmount, setPrevAmount] = useState(0);

  useEffect(() => {
    let timer1 = setTimeout(() => setPrevAmount(amount), 2000);
    return () => {
      clearTimeout(timer1);
    }
  }, [items]);

  return (
    <div className="container mx-auto h-24 bg-lime-400 mt-3 mb-3 flex justify-center items-center top-0 sticky">
      <CountUp
        className="text-white py-5 text-4xl subpixel-antialiased font-semibold"
        start={prevAmount}
        end={amount}
        preserveValue={true}
        duration={1}
        separator=","
        prefix="$"

      />
    </div>
  )
}

export default PriceBar;

