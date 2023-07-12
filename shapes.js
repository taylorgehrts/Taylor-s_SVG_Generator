const generateShape = (shape, shapeColor) => {
  const shapes = {
    circle: `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`,
    triangle: `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`,
    square: `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`,
  };

  if (shape === "Circle") {
    return shapes.circle;
  } else if (shape === "Triangle") {
    return shapes.triangle;
  } else if (shape === "Square") {
    return shapes.square;
  } else {
    throw new Error(`Invalid shape: ${shape}`);
  }
};

module.exports = generateShape;
