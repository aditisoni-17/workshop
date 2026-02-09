const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount", () => {

  test("no coupon case", () => {
    expect(calculateFinalAmount(500)).toBe(500);
  });

  test("SAVE10 coupon applies 10% discount (max 100)", () => {
    
    expect(calculateFinalAmount(1000, "SAVE10")).toBe(850);
    
   
    expect(calculateFinalAmount(2000, "SAVE10")).toBe(1800);
  });

  test("FLAT50 boundary case", () => {
    expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
    expect(calculateFinalAmount(100, "FLAT50")).toBe(50);
  });

  test("invalid subtotal throws error", () => {
    expect(() => calculateFinalAmount(-100)).toThrow("Invalid subtotal");
    expect(() => calculateFinalAmount("100")).toThrow("Invalid subtotal");
    expect(() => calculateFinalAmount(NaN)).toThrow("Invalid subtotal");
  });

  test("coupon code is case-insensitive", () => {
    expect(calculateFinalAmount(1000, "save10")).toBe(850);
    expect(calculateFinalAmount(100, "flat50")).toBe(50);
  });

  test("invalid coupon throws error", () => {
    expect(() => calculateFinalAmount(100, "WRONG")).toThrow("Invalid Coupon");
  });

});