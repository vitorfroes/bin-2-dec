import isBinary from "../utils/binary";

test("validates bin number 101", () => {
  expect(isBinary("101")).toBe(true);
});

test("validates dec 12", () => {
  expect(isBinary("12")).toBe(false);
});
