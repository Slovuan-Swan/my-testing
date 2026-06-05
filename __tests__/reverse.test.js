import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import reverse from "../src/reverse.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, "__fixtures__", filename);

describe("reverse with fixtures", () => {
  test("should correctly reverse long text from fixture", () => {
    const text = fs.readFileSync(getFixturePath("input.txt"), "utf-8").trim();
    const result = fs
      .readFileSync(getFixturePath("expected.txt"), "utf-8")
      .trim();

    expect(reverse(text)).toEqual(result);
  });
});
