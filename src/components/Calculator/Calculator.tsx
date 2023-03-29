import React, { useState } from "react";
import {
  addition,
  division,
  multiplication,
  subtraction,
} from "../../lib/math";
import Button from "./Button";

const operations = {
  addition,
  subtraction,
  multiplication,
  division,
};

type Operation = keyof typeof operations;

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [memory, setMemory] = useState<string | null>(null);
  const [operation, setOperation] = useState<Operation | null>(null);

  const handleAllClear = () => {
    setDisplay("0");
    setMemory(null);
    setOperation(null);
  };

  const handleResult = () => {
    if (memory && operation) {
      setDisplay((display) => {
        const value = parseFloat(display);
        const memoryValue = parseFloat(memory);
        const result = operations[operation](memoryValue, value);

        return isNaN(result)
          ? "Not a number"
          : result.toFixed(6).replace(/(\.0+|0+)$/, "");
      });

      setMemory(null);
      setOperation(null);
    }
  };

  const handleDigit = (digit: string) => {
    setDisplay((display) => {
      return (display === "0" ? "" : display) + digit;
    });
  };

  const handleOperation = (operation: Operation) => {
    setMemory(display);
    setOperation(operation);
    setDisplay("0");
  };

  return (
    <div className="bg-black w-80 px-3 py-10">
      <div className="m-4 mt-24 text-5xl overflow-hidden text-right">
        {display}
      </div>
      <div className="grid grid-rows-5 grid-flow-col gap-2">
        <div className="col-span-3">
          <div className="grid grid-cols-3 gap-2 place-content-center">
            <Button variant="light" label="AC" onClick={handleAllClear} />
            <Button variant="light" label={"\u00B1"} />
            <Button variant="light" label={"\u0025"} />
          </div>
        </div>
        <div className="row-span-4 col-span-3">
          <div className="grid grid-cols-3 gap-2 place-content-center">
            {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
              (label) => (
                <Button
                  key={label}
                  variant="dark"
                  label={label}
                  extended={label === "0"}
                  onClick={() => handleDigit(label)}
                />
              )
            )}
          </div>
        </div>
        <div className="row-span-5 col-span-1">
          <div className="grid grid-rows-5 gap-2 place-content-center">
            <Button
              variant="colored"
              label={"\u00F7"}
              onClick={() => handleOperation("division")}
            />
            <Button
              variant="colored"
              label={"\u00D7"}
              onClick={() => handleOperation("multiplication")}
            />
            <Button
              variant="colored"
              label={"\u2212"}
              onClick={() => handleOperation("subtraction")}
            />
            <Button
              variant="colored"
              label={"\u002B"}
              onClick={() => handleOperation("addition")}
            />
            <Button
              variant="colored"
              label={"\u003D"}
              onClick={() => handleResult()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
