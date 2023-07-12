class Shape {
  constructor(color) {
    this.color = color;
  }

  getShapeColor() {
    return this.color;
  }

  draw() {
    throw new Error("draw() method must be implemented in the child class.");
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `<circle cx="150" cy="100" r="50" fill="${this.getShapeColor()}" />`;
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.getShapeColor()}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.getShapeColor()}" />`;
  }
}

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

  return shapeObj.draw();
};

module.exports = generateShape;
