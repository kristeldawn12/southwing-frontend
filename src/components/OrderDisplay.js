import React, { useContext } from "react";
import { MainContext } from "../provider/MainProvider.js";

export const OrderDisplay = () => {
  const { closeOrderDisplay } = useContext(MainContext);

  return (
    <main>
      <section className="w-[25em] h-[14.5em] flex flex-col p-2 justify-center items-center">
        <h4>Thank you. Come Again!</h4>
        <p className="text-center py-2">
          Estimated Delivery Time: 30 to 45 mins
        </p>
        <div className="">
          <p>#EATSSOUTHWINGS</p>
          <p>#WINGITEVERYDAY</p>
        </div>
        <button
          className="close-display hover:scale-95"
          onClick={closeOrderDisplay}
        >
          <p>close</p>
        </button>
      </section>
    </main>
  );
};
