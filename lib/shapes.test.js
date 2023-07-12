const generateShape = require("./shapes");
//test if circle is a circle and was generated properly
describe("Circle", () => {
  test("render() method should return SVG string with the given shape color", () => {
    const svg = generateShape("Circle", "blue");
    expect(svg).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
  });
});
//test if triangle is a triangle and was generated properly
describe("Triangle", () => {
  test("render() method should return SVG string with the given shape color", () => {
    const svg = generateShape("Triangle", "blue");
    expect(svg).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
  });
});
//test if square is a square and was generated properly
describe("Square", () => {
  test("render() method should return SVG string with the given shape color", () => {
    const svg = generateShape("Square", "blue");
    expect(svg).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />');
  });
});
