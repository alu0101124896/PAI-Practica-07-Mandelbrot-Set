/**
 * @file mandelbrot.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the Mandelbrot Set Visualization. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict"

const REAL_MIN = -2.5;
const REAL_MAX = 1.5;
const IMAGINARY_MIN = -1.5;
const IMAGINARY_MAX = 1.5;

const UMBRAL = 2.0;

function generateComplexNumbers(CANVAS) {
  let complexNumbers = [];
  for (let widthIterator = 0; widthIterator < CANVAS.width; widthIterator++) {
    for (let heightIterator = 0; heightIterator < CANVAS.height; heightIterator++) {
      complexNumbers.push(new ComplexNumber(widthIterator, heightIterator));
    }
  }
  return complexNumbers;
}

function drawPixel(complexNumber, iterations, maxIterations, CONTEXT) {
  if (complexNumber.getPartOfManbelbrotSet()) {
    CONTEXT.fillStyle = 'black';
  } else {
    CONTEXT.fillStyle = 'rgb(0,' + Math.floor(255 * (iterations + 1) / maxIterations) + ',0)';
  }
  CONTEXT.fillRect(complexNumber.real, complexNumber.imaginary, 1, 1);
}

function mandelbrotSet(maxIterations, complexNumbers, CONTEXT, CANVAS) {
  complexNumbers.forEach(complexNumber => {
    let iterator = 0;
    let realPart = complexNumber.getReal() * (REAL_MAX - REAL_MIN) / CANVAS.width + REAL_MIN;
    let imaginaryPart = complexNumber.getImaginary() * (IMAGINARY_MAX - IMAGINARY_MIN) / CANVAS.height + IMAGINARY_MIN;
    let thisComplexNumber = new ComplexNumber(realPart, imaginaryPart);
    let actualComplexNumber = new ComplexNumber(0, 0);
    while (iterator < maxIterations) {
      if (ComplexNumber.absoluteValue(actualComplexNumber) > UMBRAL) {
        complexNumber.setPartOfManbelbrotSet(false);
        break;
      }
      actualComplexNumber = ComplexNumber.add(ComplexNumber.square(actualComplexNumber), thisComplexNumber);
      iterator++;
    }
    drawPixel(complexNumber, iterator, maxIterations, CONTEXT);
  });
}

/**
 * @description Function that starts the execution of the program
 */
function main() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    CANVAS.width = window.innerWidth - 100;
    CANVAS.height = window.innerHeight - 175;

    debugger;
    let maxIterations = prompt("Enter number of iterations:", "20");
    let complexNumbers = generateComplexNumbers(CANVAS);
    mandelbrotSet(maxIterations, complexNumbers, CONTEXT, CANVAS);
  }
}

main();
