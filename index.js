// Imports
const inquirer = require("inquirer");
const fs = require('fs');
const generateShape = require("./shapes");

// Prompt questions
const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters for your logo:",
        validate: function (input) {
            return input.length <= 3 ? true : "Please enter up to three characters.";
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color keyword (OR a hexadecimal number) for the text:"
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape for your logo:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color keyword (OR a hexadecimal number) for the shape:"
    }
];

function generateSVGFile(answers) {
    const { text, textColor, shape, shapeColor } = answers;
    const shapeSVG = generateShape(shape, shapeColor);
    const cssContent = `
      text {
        font-size: 30px;
        font-weight: bold;
        font-family: Arial, sans-serif;
      }
    `;

    const logoContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <style>${cssContent}</style>
        ${shapeSVG}
        <text x="150" y="100" fill="${textColor}" text-anchor="middle">${text.toUpperCase()}</text>
      </svg>
    `;

    fs.writeFile("logo.svg", logoContent, err => {
        if (err) {
            console.error("Error writing logo.svg:", err);
            return;
        }
        console.log("Generated logo.svg");
        

        
    });
}


function run() {
    inquirer.prompt(questions)
        .then(answers => {
            generateSVGFile(answers);
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
}

run();
