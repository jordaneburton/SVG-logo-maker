[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# SVG-logo-maker
Node.js command-line application that takes in user input to generate a logo

## Description

The SVG Logo Maker utilizes Jest and the Inquirer node.js package to craft a svg file for a logo via the terminal. The application prompts you for the logo text, the text's color, the shape of your logo, and the shape's color. The application utilizes Jest for testing the input. If the user inputs do not meet certain criteria, the tests files will catch and throw errors to the terminal, ending the execution of the application. This application is supposed to serve as a quick way to generate a simple custom logo as an SVG file while letting our Jest tests handle any errors!

Here is a link to a [walkthrough video]()

## Table of Contents 
1. [Installation](#install)
2. [Usage](#usage)
3. [License](#license)
4. [Questions](#questions)

## <a id='install'>Installation</a>

This application does require node.js and therefore, you must install it before you can use the application. If you haven't installed node.js, use the following link [https://nodejs.org/en/download] and install the proper version according to your OS. Once installed, run the node setup executable. Once node.js is setup on your system, go to the directory where you plan to download the repository and run the command `npm init -y` in your terminal. Then run `npm i inquirer@8.2.4` as well as `npm i jest` and now you will be able to download the repository into the directory.

## <a id='usage'>Usage</a>

To use the application, go to the repository's directory and run the command `node index` in your terminal. Shortly thereafter, the application will prompt you with various questions in order to craft your logo. The logo can only have at the most 3 letters of text and the user must provide a valid color keyword or hexadecimal code for both the text color and shape color.

## <a id='license'>License</a>

This application is covered under the MIT license.

## <a id='questions'>Questions</a>

If you have any additional questions, contact me using the following links:
- Email: [jordane.burton@gmail.com]
- GitHub: [jordaneburton](https://github.com/jordaneburton)


## Acknowledgements

Special thanks to the following sources for providing functionality:
- Thank you to [Jest](https://jestjs.io/) for their JS testing framework
- Thank you to [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for the prompt functionality
- Thank you to [Shields.io](https://shields.io/) for crafting license badges