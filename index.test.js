import { describe, test } from "mocha";
import { sum } from "./index.js";

describe("sum", () => {
  test("should return 3 when adding 1 and 2", () => {
    const result = sum(1, 2);
    if (result !== 3) {
      throw new Error(`Expected 3, but got ${result}`);
    }
  });

  test("should return -1 when adding -2 and 1", () => {
    const result = sum(-2, 1);
    if (result !== -1) {
      throw new Error(`Expected -1, but got ${result}`);
    }
  });
});
