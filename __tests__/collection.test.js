import get from "../src/collection.js";

// Каждый тест проверяет ровно одну изолированную задачу или сценарий
test("should return value by existing key", () => {
  expect(get({ hello: "world" }, "hello")).toBe("world");
});

test("should return default value if key does not exist", () => {
  expect(get({}, "hello", "kitty")).toBe("kitty");
});

test("should return existing value even if default value is provided", () => {
  expect(get({ hello: "world" }, "hello", "kitty")).toBe("world");
});
