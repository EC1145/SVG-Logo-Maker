const inquirer = require("inquirer");
const Logo = require("./lib/Logo");
const Shape = require("./lib/Shape");
const fs = require("fs");

// Function to save SVG code to file
function saveSVGToFile(svgCode) {
  fs.writeFile("logo.svg", svgCode, (err) => {
    if (err) {
      console.error("Error saving SVG file:", err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

// Prompt user for input
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text (up to 3 characters):",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (keyword or hex):",
    },
    {
      type: "list",
      name: "shapeType",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (keyword or hex):",
    },
  ])
  .then((answers) => {
    const { text, textColor, shapeType, shapeColor } = answers;
    const logo = new Logo(text, textColor);
    const shape = new Shape(shapeType, shapeColor);
    logo.addShape(shape);
    const svgCode = logo.generateSVG();
    saveSVGToFile(svgCode);
  });
