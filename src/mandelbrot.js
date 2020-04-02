/**
 * @file mandelbrot.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the Mandelbrot Set Visualization. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict";

const REAL_MIN = -2.5; // Minimum value of the real axes
const REAL_MAX = 1.5; // Maximum value of the real axes
const IMAGINARY_MIN = -1.5; // Minimum value of the imaginary axes
const IMAGINARY_MAX = 1.5; // Maximum value of the imaginary axes

const UMBRAL = 2.0; // Umbral value for every pixel of being part of the Mandelbrot Set

/**
 * @description Function that gives a color to every pixel depending on the number of iterations that kept inside the umbral value
 *
 * @param {number} iterations - Number of iterations that kept inside the umbral value
 * @param {number} maxIterations - Maximum number of iterations
 * @param {array} complexNumbers - Array of all the pixels of the canvas stored as complex numbers
 * @param {*} CONTEXT - Canvas context
 */
function drawPixel(iterations, maxIterations, complexNumber, CONTEXT) {
  if (!complexNumber.getPartOfManbelbrotSet()) {
    complexNumber.setColor('rgb(0,' + (Math.floor(250 * (Math.log(iterations) / Math.log(maxIterations - 1.0))) + 5) + ',0)');
  }
  CONTEXT.fillStyle = complexNumber.getColor();
  CONTEXT.fillRect(complexNumber.real, complexNumber.imaginary, 1, 1);
}

/**
 * @description Function that generates a complex number with every pixel of the canvas
 *
 * @returns {array} Returns an array with all generated complex numbers
 */
function generateComplexNumbers(CANVAS) {
  let complexNumbers = [];
  for (let widthIterator = 0; widthIterator < CANVAS.width; widthIterator++) {
    for (let heightIterator = 0; heightIterator < CANVAS.height; heightIterator++) {
      complexNumbers.push(new ComplexNumber(widthIterator, heightIterator));
    }
  }
  return complexNumbers;
}

/**
 * @description Function that iterates every pixel to see if it is part of the Mandelbrot Set
 *
 * @param {number} maxIterations - Maximum number of iterations
 * @param {array} complexNumbers - Array of all the pixels of the canvas stored as complex numbers
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
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
    drawPixel(iterator, maxIterations, complexNumber, CONTEXT);
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
    let maxIterations = prompt("Enter number of iterations for the Mandelbrot Set:", "50");
    let complexNumbers = generateComplexNumbers(CANVAS);
    mandelbrotSet(maxIterations, complexNumbers, CONTEXT, CANVAS);
    let numOfPoints = prompt("Enter number of points for Monte Carlo method:", "1000");
    monteCarlo(numOfPoints, complexNumbers, REAL_MIN, REAL_MAX, IMAGINARY_MIN, IMAGINARY_MAX, CONTEXT, CANVAS);
  }
}
