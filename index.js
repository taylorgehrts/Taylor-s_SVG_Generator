//Imports
const inquirer = require("inquirer");
const fs = require('fs');


//prompt questions
const questions = [

    {
        type: "input",
        name: "Text",
        message: "Please select up to three letters to feature in your logo."

    },

    {
        type: "input",
        name: "TextColor",
        message: "Please enter a color keyword (OR a hexadecimal number) for the text."
    },

    {
        type: "list",
        name: "Shape",
        message: "Please choose a shape for your logo.",
        choices: ["Circle", "Triangle", "Square"]

    },

    {
        type: "input",
        name: "Color",
        message: "Please enter a color keyword (OR a hexadecimal number) for the shape."
    },

]