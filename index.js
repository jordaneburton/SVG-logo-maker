const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require("./lib/svg");
const { Square, Triangle, Circle } = require("./lib/shapes");

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Input text for logo',
            },

            {
                type: 'input',
                name: 'textColor',
                message: 'Input color for text:',
            },

            {
                type: 'list',
                name: 'shape',
                message: 'Input shape for logo',
                choices: [
                    'circle',
                    'triangle',
                    'square'
                ]
            },
            
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Input color for logo:',
            },
        ])
        .then((data) => {
            const svg = new SVG;

            switch(data.shape) {
                case 'circle':
                    const circle = new Circle;              

                    circle.setColor(data.shapeColor);
                    svg.setShape(circle);
                    svg.setText(data.text, data.textColor);
                    break;   
                    
                case 'triangle':
                    const triangle = new Triangle;

                    triangle.setColor(data.shapeColor);
                    svg.setShape(triangle);
                    svg.setText(data.text, data.textColor);
                    break;

                case 'square':
                    const square = new Square;

                    square.setColor(data.shapeColor);
                    svg.setShape(square);
                    svg.setText(data.text, data.textColor);
                    break;
                    
            }            
            const renderedSVG = svg.render();

            fs.writeFile('logo.svg', renderedSVG, (error) => {
                if(error) console.error(error);
            });

            // return data.json();
        })
        .catch((error) => {
            console.log(error);
        });
}


init();