import React from "react";

const Calculator: React.FC = () => {
  return (
    <div className="bg-black w-80 p-3">
      <div className="bg-blue-500 py-6 text-5xl overflow-hidden text-right">
        1234567890123
      </div>
      <div className="bg-red-500">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </div>
  );
};

export default Calculator;
