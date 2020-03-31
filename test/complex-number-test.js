/**
 * @file complex-number-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the complex number class
 */

"use strict"

const should = chai.should();

describe('Complex Number Class', () => {
  describe('Atributes', () => {
    let complexNumber;

    beforeEach(() => {
      complexNumber = new ComplexNumber(10, 20);
    });

    it('Returns the real part', () => {
      complexNumber.should.have.property('real');
      complexNumber.getReal().should.be.a('number');
      complexNumber.getReal().should.equal(10);
    });

    it('Returns the imaginary part', () => {
      complexNumber.should.have.property('imaginary');
      complexNumber.getImaginary().should.be.a('number');
      complexNumber.getImaginary().should.equal(20);
    });

    it('Returns if is part of the Mandelbrot Set', () => {
      complexNumber.should.have.property('partOfManbelbrotSet');
      complexNumber.getPartOfManbelbrotSet().should.be.a('boolean');
      complexNumber.getPartOfManbelbrotSet().should.equal(true);
    });

    it('Sets if is part of the Mandelbrot Set', () => {
      complexNumber.setPartOfManbelbrotSet(false);
      complexNumber.getPartOfManbelbrotSet().should.equal(false);
    });

    it('Returns the color', () => {
      complexNumber.should.have.property('color');
      complexNumber.getColor().should.be.a('string');
      complexNumber.getColor().should.equal('rgb(0,0,0)');
    });

    it('Sets the color', () => {
      complexNumber.setPartOfManbelbrotSet(false);
      complexNumber.getPartOfManbelbrotSet().should.equal(false);
    });
  });

  describe('Operations', () => {
    let numOne, numTwo, numThree, solutionAdd, solutionSquare;

    beforeEach(()=>{
      numOne = new ComplexNumber(10, 20);
      numTwo = new ComplexNumber(30, 40);
      numThree = new ComplexNumber(3, 4);
      solutionAdd = new ComplexNumber(40, 60);
      solutionSquare = new ComplexNumber(-300, 400);
    });

    it('Adds two complex numbers correctly', ()=>{
      let result = ComplexNumber.add(numOne, numTwo);
      result.getReal().should.equal(solutionAdd.getReal());
      result.getImaginary().should.equal(solutionAdd.getImaginary());
    });

    it('Square a complex number correctly', ()=>{
      let result = ComplexNumber.square(numOne);
      result.getReal().should.equal(solutionSquare.getReal());
      result.getImaginary().should.equal(solutionSquare.getImaginary());
    });

    it('Absolute value of a complex number correctly', ()=>{
      let result = ComplexNumber.absoluteValue(numThree);
      result.should.be.a('number');
      result.should.equal(5);
    });
  });
});
