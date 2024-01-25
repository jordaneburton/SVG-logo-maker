class Shape {
    color = ``;
    shape = ``;

    setColor(color) {
        this.color = color;
    }
    render() {
        return `<${this.shape} fill="${this.color}" />`
    }
}

class Square extends Shape {
    shape = `rect x="90" y="40" width="120" height="120"`;
}

class Triangle extends Shape {
    shape = `polygon points="150, 18 244, 182 56, 182"`;
}

class Circle extends Shape {
    shape = `circle cx="150" cy="100" r="80"`;
}

module.exports = {
    Square,
    Triangle,
    Circle,
}