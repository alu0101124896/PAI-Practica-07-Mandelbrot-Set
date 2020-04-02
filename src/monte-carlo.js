/**
 * @file monte-carlo.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the Monte Carlo method to calculate the area of the Mandelbrot Set. More info about it here: https://en.wikipedia.org/wiki/Monte_Carlo_method
 */

"use strict";

const ROUNDING_VALUE = 1000000;

/**
 * @description Function that generates random numbers between the given values
 *
 * @param {number} min_val - Minimum random value
 * @param {number} max_val - Maximum random value
 * @returns {number} Returns the random number generated
 */
function random(min_val, max_val) {
  return (Math.floor(Math.random() * (max_val - min_val)) + min_val);
}

/**
 * @description Function that prints the area value
 *
 * @param {number} mandelbrotSetAreaError - Area value
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function printArea(mandelbrotSetArea, CONTEXT, CANVAS) {
  CONTEXT.fillStyle = 'white'
  CONTEXT.font = "30px Arial";
  CONTEXT.fillText("Area: " + mandelbrotSetArea, 10, CANVAS.height - 10);
}

/**
 * @description Function that prints the error value
 *
 * @param {number} mandelbrotSetAreaError - Error value
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function printError(mandelbrotSetAreaError, CONTEXT, CANVAS) {
  CONTEXT.fillStyle = 'white'
  CONTEXT.font = "30px Arial";
  CONTEXT.fillText("Error: " + mandelbrotSetAreaError, 10, CANVAS.height - 50);
}

/**
 * @description Function that calculates the area of the Mandelbrot Set by generating random points
 *
 * @param {number} numOfPoints - Number of random points to generate
 * @param {array} complexNumbers - Array of all the pixels of the canvas stored as complex numbers
 * @param {number} REAL_MIN - Minimum value of the real axes
 * @param {number} REAL_MAX - Maximum value of the real axes
 * @param {number} IMAGINARY_MIN - Minimum value of the imaginary axes
 * @param {number} IMAGINARY_MAX - Maximum value of the imaginary axes
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function monteCarlo(numOfPoints, complexNumbers, REAL_MIN, REAL_MAX, IMAGINARY_MIN, IMAGINARY_MAX, CONTEXT, CANVAS) {
  let pointsInsideMandelbrotSet = 0;
  for (let pointsIterator = 0; pointsIterator < numOfPoints; pointsIterator++) {
    let randomComplexNuber = new ComplexNumber(random(0, CANVAS.width - 1), random(0, CANVAS.height - 1));
    for (let complexNumbersIterator = 0; complexNumbersIterator < complexNumbers.length; complexNumbersIterator++) {
      if ((complexNumbers[complexNumbersIterator].getReal() === randomComplexNuber.getReal()) && (complexNumbers[complexNumbersIterator].getImaginary() === randomComplexNuber.getImaginary())) {
        if (complexNumbers[complexNumbersIterator].getColor() === "rgb(0,0,0)") {
          pointsInsideMandelbrotSet++;
        }
        break;
      }
    }
  }
  let mandelbrotSetArea = Math.round((Math.abs(REAL_MIN) + Math.abs(IMAGINARY_MIN)) * (Math.abs(REAL_MAX) + Math.abs(IMAGINARY_MAX)) * (pointsInsideMandelbrotSet / numOfPoints) * ROUNDING_VALUE) / ROUNDING_VALUE;
  printArea(mandelbrotSetArea, CONTEXT, CANVAS);
  let mandelbrotSetAreaError = Math.round(mandelbrotSetArea / Math.sqrt(numOfPoints) * ROUNDING_VALUE) / ROUNDING_VALUE;
  printError(mandelbrotSetAreaError, CONTEXT, CANVAS);
}
