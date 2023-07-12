# Taylor-s_SVG_Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
- This is a simple program based on node and inquirer that will create a list of prompts in the terminal that a user can answer to generate a simple logo in a SVG file
- The program uses a file system to write the file
- Inquirer is used to generate the prompts with questions located in an array
- The program is invoked with the help of the node runtime enviroment
- There is also a suite of test that confirm that the SVG was generated properly, this is using the jest package.
- I had to go back a few times with this project as I didn't read the full instructions until I had the program running.  I then refactored the code to inculde the use of classes and created the testing.

## Installation
Right now you would need to clone the repository and then navigate to the directory and open the terminal. From there you will need to run npm install to install any dependencies and then run the program

## Usage
- Simply run the program with the command node index.js in the terminal and then answer the questions, when you are through it will generate the SVG file.
- To view the logo open the file in the browser
- [Walkthrough Video](https://drive.google.com/file/d/12BleJ_CEeDh6C69ZzQhjTM6krKM3oK9L/view)

## License
This project is licensed under the MIT license. Click [License](https://opensource.org/licenses/MIT) for more information.

## Contributing
Taylor Gehrts

## Tests
The test here are pretty simple and just test whether the shape will be drawn correctly.  To run the test (after you have installed all dependencies) simply run npm test from the command line while in the appropriate directory.

## Questions
If you have any questions, you can reach out to me via GitHub or E-mail:

- GitHub: [taylorgehrts](https://github.com/taylorgehrts)
- Email: [taylorgehrts@gmail.com](mailto:taylorgehrts@gmail.com)