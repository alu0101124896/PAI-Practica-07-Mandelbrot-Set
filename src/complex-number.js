/**
 * @file complex-number.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a complex number class for the Mandelbrot Set Visualization. More info about it here: https://en.wikipedia.org/wiki/mandelbrot_set
 */

"use strict"

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
    let real = firstComplexNumber.real + secondComplexNumber.real;
    let imaginary = firstComplexNumber.imaginary + secondComplexNumber.imaginary;
    return new ComplexNumber(real, imaginary);
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
    let real = (complexNumber.real * complexNumber.real) - (complexNumber.imaginary * complexNumber.imaginary);
    let imaginary = 2 * complexNumber.real * complexNumber.imaginary;
    return new ComplexNumber(real, imaginary);
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

// module.exports = ComplexNumber;
// export const addTest = add;
// export const squareTest = square;
// export const absoluteValueTest = absoluteValue;
