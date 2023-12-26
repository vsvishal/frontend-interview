import add from "./addFun";

describe("add function", () => {
  it("add two numbers correctly", () => {
    expect(add(2, 4)).toBe(6);
    expect(add(-1, 1)).toBe(0);
  });
});
