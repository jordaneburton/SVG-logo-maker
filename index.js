const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

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
            if (data.text.length > 3) {
                throw new Error('Input text for logo must have no more than 3 characters');
            }
            // if condition to check textColor
            // if condition to check shapeColor

            return data.json();
        })
        .catch((error) => {
            console.log(error);
        });
}


init();