/**
 * @file monte-carlo-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Monte Carlo method
 */

"use strict";

describe('Monte Carlo method', () => {
  describe('Functions', () => {
    let a = 1;
    let b = 10;

    it('Random number', () => {
      let result = random(a,b)
      result.should.be.a('number').be.gt(a-1).and.be.lt(b+1);
    });
  });
});
