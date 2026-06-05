import capitalize from "../src/capitalize.js";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("")).toBe("");
});
