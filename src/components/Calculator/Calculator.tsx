import React from "react";

const Calculator: React.FC = () => {
  return (
    <div className="bg-black w-80 p-3">
      <div className="bg-blue-500 py-6 text-5xl overflow-hidden text-right">
        1234567890123
      </div>
      <div className="grid bg-red-500 grid-rows-5 grid-flow-col gap-2">
        <div className="col-span-3 bg-blue-200">
          <div className="grid grid-cols-3 gap-2 place-content-center">
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              AC
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              {"\u00B1"}
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              {"\u0025"}
            </button>
          </div>
        </div>
        <div className="row-span-4 col-span-3 bg-blue-600">
          <div className="grid grid-cols-3 gap-2 place-content-center">
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              7
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              8
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              9
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              4
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              5
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              6
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              1
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              2
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              3
            </button>
            <button className="rounded-full col-span-2 text-left h-16 text-2xl px-6 bg-red-600">
              0
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-red-600">
              .
            </button>
          </div>
        </div>
        <div className="row-span-5 col-span-1 bg-red-300">
          <div className="grid grid-rows-5 gap-2 place-content-center">
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              {"\u00F7"}
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              {"\u00D7"}
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              {"\u2212"}
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              {"\u002B"}
            </button>
            <button className="rounded-full w-16 h-16 text-2xl bg-blue-600">
              {"\u003D"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
