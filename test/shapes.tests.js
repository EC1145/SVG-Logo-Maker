const Shape = require("../lib/Shape");
//import
test("Circle generates SVG correctly", () => {
  const circle = new Shape("circle", "red");
  const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />\n';
  expect(circle.generateSVG()).toBe(expectedSVG);
});

test("Triangle generates SVG correctly", () => {
  const triangle = new Shape("triangle", "blue");
  const expectedSVG =
    '<polygon points="150,50 100,150 200,150" fill="blue" />\n';
  expect(triangle.generateSVG()).toBe(expectedSVG);
});

test("Square generates SVG correctly", () => {
  const square = new Shape("square", "green");
  const expectedSVG =
    '<rect x="100" y="50" width="100" height="100" fill="green" />\n';
  expect(square.generateSVG()).toBe(expectedSVG);
});
