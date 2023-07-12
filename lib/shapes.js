//Shape class to use as blueprint
class Shape {
  constructor(color) {
    this.color = color;
  }

  getShapeColor() {
    return this.color;
  }

  render() {
    throw new Error("render() method must be implemented in the child class.");
  }
}
//Circle class used to extend the shape class
class Circle extends Shape {
  constructor(color) {
    super(color);
  }
//Render function to draw the circle
  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.getShapeColor()}" />`;
  }
}
//Triangle class used to extend the shape class
class Triangle extends Shape {
  constructor(color) {
    super(color);
  }
//Render function to draw the triangle
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.getShapeColor()}" />`;
  }
}
//Square class used to extend the shape class
class Square extends Shape {
  constructor(color) {
    super(color);
  }
//Render function to draw the square
  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.getShapeColor()}" />`;
  }
}
//logic to use answers as a way to choose which shape is used
const generateShape = (shape, shapeColor) => {
  let shapeObj;

  if (shape === "Circle") {
    shapeObj = new Circle(shapeColor);
  } else if (shape === "Triangle") {
    shapeObj = new Triangle(shapeColor);
  } else if (shape === "Square") {
    shapeObj = new Square(shapeColor);
  } else {
    throw new Error(`Invalid shape: ${shape}`);
  }

  return shapeObj.render();
};
//export
module.exports = generateShape;
