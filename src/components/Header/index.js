import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-auto h-24 bg-white"></div>
      <header className="container mx-auto flex flex-col bg-white h-72 mt-5">
        <img
          className="rounded-full my-auto mx-auto w-40"
          src="https://neal.fun/spend/billgates.jpg"
          alt="bill gates"
        />
        <h1 className="text-4xl my-auto mx-auto subpixel-antialiased font-semibold">
          Spend Bill Gates' Money
        </h1>
      </header>
    </>
  );
};

export default Header;
