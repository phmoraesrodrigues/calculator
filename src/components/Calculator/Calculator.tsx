import React from "react";
import Button from "./Button";

const Calculator: React.FC = () => {
  return (
    <div className="bg-black w-80 px-3 py-10">
      <div className="m-4 mt-24 text-6xl overflow-hidden text-right">0</div>
      <div className="grid grid-rows-5 grid-flow-col gap-2">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-2 place-content-center">
            <Button variant="light" label="AC" />
            <Button variant="light" label={"\u00B1"} />
            <Button variant="light" label={"\u0025"} />
          </div>
        </div>
        <div className="row-span-4 col-span-3">
          <div className="grid grid-cols-3 gap-2 place-content-center">
            {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((label) => (
              <Button variant="dark" label={label} extended={label === "0"} />
            ))}
            <Button variant="dark" label="." />
          </div>
        </div>
        <div className="row-span-5 col-span-1">
          <div className="grid grid-rows-5 gap-2 place-content-center">
            <Button variant="colored" label={"\u00F7"} />
            <Button variant="colored" label={"\u00D7"} />
            <Button variant="colored" label={"\u2212"} />
            <Button variant="colored" label={"\u002B"} />
            <Button variant="colored" label={"\u003D"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
