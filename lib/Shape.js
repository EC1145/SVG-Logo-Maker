class Shape {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }

  generateSVG() {
    switch (this.type) {
      case "circle":
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />\n`;
      case "triangle":
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />\n`;
      case "square":
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />\n`;
      default:
        return "";
    }
  }
}

module.exports = Shape;
