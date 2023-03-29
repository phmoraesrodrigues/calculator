import { addition, division, multiplication, subtraction } from "./math";

describe("math", () => {
  describe("addition", () => {
    it("should add two numbers", () => {
      expect(addition(1, 2)).toBe(3);
    });
  });

  describe("subtraction", () => {
    it("should subtract two numbers", () => {
      expect(subtraction(1, 2)).toBe(-1);
    });
  });

  describe("multiplication", () => {
    it("should multiply two numbers", () => {
      expect(multiplication(1, 2)).toBe(2);
    });
  });

  describe("division", () => {
    it("should divide two numbers", () => {
      expect(division(1, 2)).toBe(0.5);
    });

    it("should return NaN when dividing by 0", () => {
      expect(division(1, 0)).toBe(NaN);
    });
  });
});
