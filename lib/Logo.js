class Logo {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapes = [];
  }

  addShape(shape) {
    this.shapes.push(shape);
  }

  generateSVG() {
    let svgCode = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;
    svgCode += `<text x="10" y="30" fill="${this.textColor}">${this.text}</text>\n`;
    this.shapes.forEach((shape) => {
      svgCode += shape.generateSVG();
    });
    svgCode += `</svg>`;
    return svgCode;
  }
}

module.exports = Logo;
