/**
 * @file mandelbrot.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the Mandelbrot Set Visualization. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict"

const REAL_MIN = -2.0;
const REAL_MAX = 1.0;
const IMAGINARY_MIN = -1.5;
const IMAGINARY_MAX = 1.5;

const UMBRAL = 2.0;

/**
 * @description Function that generates random numbers between the given values
 *
 * @param {number} min_val - Minimum random value
 * @param {number} max_val - Maximum random value
 * @returns {number} Returns the random number generated
 */
function random(min_val, max_val) {
  return (Math.random() * (max_val - min_val)) + min_val;
}

/**
 * @description Class representing a complex number
 *
 * @class ComplexNumber
 */
class ComplexNumber {

  /**
   * @description Constructor that creates an instance of a complex number.
   *
   * @param {number} [real=0] - real part
   * @param {number} [imaginary=0] - imaginary part
   * @memberof ComplexNumber
   */
  constructor(real = 0, imaginary = 0) {
    this.real = Number(real);
    this.imaginary = Number(imaginary);
    this.partOfManbelbrotSet = true;
  }

  /**
   * @description Getter function of the real part
   *
   * @returns {number} Returns the real part of the complex number
   * @readonly
   * @memberof ComplexNumber
   */
  getReal() { return this.real; }

  /**
   * @description Getter function of the imaginary part
   *
   * @returns {number} Returns the imaginary part of the complex number
   * @readonly
   * @memberof ComplexNumber
   */
  getImaginary() { return this.imaginary; }

  /**
   * @description Getter function of the imaginary part
   *
   * @returns {boolean} Returns true if this number is part of the Mandelbrot Set
   * @readonly
   * @memberof ComplexNumber
   */
  getPartOfManbelbrotSet() { return this.partOfManbelbrotSet; }

  /**
   * @description Setter function of the attribute that stores if the complex number is part of the Mandelbrot Set
   *
   * @memberof ComplexNumber
   */
  setPartOfManbelbrotSet(isPart) { this.partOfManbelbrotSet = isPart; };

  /**
   * @description Function that adds two given complex numbers together
   *
   * @static
   * @param {ComplexNumber} firstComplexNumber - First complex number
   * @param {ComplexNumber} secondComplexNumber - Second complex number
   * @returns {ComplexNumber} Returns the resulting complex number
   * @memberof ComplexNumber
   */
  static add(firstComplexNumber, secondComplexNumber) {
    this.real = firstComplexNumber.real + secondComplexNumber.real;
    this.imaginary = firstComplexNumber.imaginary + secondComplexNumber.imaginary;
    return this;
  }

  /**
   * @description Function that squares a given complex number
   *
   * @static
   * @param {ComplexNumber} complexNumber - Given complex number
   * @returns {ComplexNumber} Returns the resulting complex number
   * @memberof ComplexNumber
   */
  static square(complexNumber) {
    this.real = (complexNumber.real * complexNumber.real) - (complexNumber.imaginary * complexNumber.imaginary);
    this.imaginary = 2 * complexNumber.real * complexNumber.imaginary;
    return this;
  }

  /**
   * @description Function that calculates the absolute value of a given complex number
   *
   * @static
   * @param {ComplexNumber} complexNumber - Given complex number
   * @returns {number} Returns the absolute value
   * @memberof ComplexNumber
   */
  static absoluteValue(complexNumber) {
    return Math.sqrt((complexNumber.real * complexNumber.real) + (complexNumber.imaginary * complexNumber.imaginary));
  }
}

function generateComplexNumbers(CANVAS) {
  let complexNumbers = [];
  for (let whithIterator = 0; whithIterator < CANVAS.width; whithIterator++) {
    for (let heightIterator = 0; heightIterator < CANVAS.height; heightIterator++) {
      complexNumbers.push(new ComplexNumber(whithIterator, heightIterator));
    }
  }
  return complexNumbers;
}

function drawPixel(complexNumber, iterations, numOfIterations, CONTEXT) {
  if (complexNumber.getPartOfManbelbrotSet()) {
    CONTEXT.fillStyle = 'black';
  } else {
    CONTEXT.fillStyle = 'rgb(0,' + Math.floor(255 * (iterations + 1) / numOfIterations) + ',0)';
  }
  CONTEXT.fillRect(complexNumber.real, complexNumber.imaginary, 1, 1);
}

function mandelbrotSet(numOfIterations, complexNumbers, CONTEXT, CANVAS) {
  complexNumbers.forEach(complexNumber => {
    let iterator = 0;
    let realPart = complexNumber.getReal() * (REAL_MAX - REAL_MIN) / CANVAS.width + REAL_MIN;
    let imaginaryPart = complexNumber.getImaginary() * (IMAGINARY_MAX - IMAGINARY_MIN) / CANVAS.height + IMAGINARY_MIN;
    let thisComplexNumber = new ComplexNumber(realPart, imaginaryPart);
    let actualComplexNumber = new ComplexNumber(realPart, imaginaryPart);
    while (iterator < numOfIterations) {
      actualComplexNumber = ComplexNumber.add(ComplexNumber.square(actualComplexNumber), thisComplexNumber);
      if (ComplexNumber.absoluteValue(actualComplexNumber) > UMBRAL) {
        complexNumber.setPartOfManbelbrotSet(false);
        break;
      }
      iterator++;
    }
    drawPixel(complexNumber, iterator, numOfIterations, CONTEXT);
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
    let numOfIterations = prompt("Enter number of iterations:", "20");
    let complexNumbers = generateComplexNumbers(CANVAS);
    mandelbrotSet(numOfIterations, complexNumbers, CONTEXT, CANVAS);
  }
}

main();
