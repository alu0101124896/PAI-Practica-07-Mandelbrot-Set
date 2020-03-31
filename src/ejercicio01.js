/**
 * @file tabares-sergio-ejercicio01.html
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna - Computer Science - Interactive Aplication Programing
 * @description This program implements a function to draw multiple polyhedra
 */

"use strict"

/**
 * @description Function that draws a pyramid
 *
 * @param {number} xMin - Minimum X coordinate
 * @param {number} xMax - Maximum X coordinate
 * @param {number} yMin - Minimum Y coordinate
 * @param {number} yMax - Maximum Y coordinate
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawPyramid(xMin, xMax, yMin, yMax, CONTEXT) {
  CONTEXT.beginPath();
  CONTEXT.strokeStyle = 'black';
  CONTEXT.lineWidth = 5;
  CONTEXT.moveTo(xMax / 2, yMin + 10);
  CONTEXT.lineTo(xMin + 40, yMax - 60);
  CONTEXT.lineTo(xMax / 2 - 40, yMax - 10);
  CONTEXT.lineTo(xMax / 2, yMin + 10);
  CONTEXT.lineTo(xMax - 60, yMax - 40);
  CONTEXT.lineTo(xMax / 2 - 40, yMax - 10);
  CONTEXT.stroke();
}

/**
 * @description Function that draws an octahedron
 *
 * @param {number} xMin - Minimum X coordinate
 * @param {number} xMax - Maximum X coordinate
 * @param {number} yMin - Minimum Y coordinate
 * @param {number} yMax - Maximum Y coordinate
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawOctahedron(xMin, xMax, yMin, yMax, CONTEXT) {
  CONTEXT.beginPath();
  CONTEXT.strokeStyle = 'black';
  CONTEXT.lineWidth = 5;
  CONTEXT.moveTo(xMax / 2 + 200, yMin + 10);
  CONTEXT.lineTo(xMin + 80, yMax / 2 + 20);
  CONTEXT.lineTo(xMax / 2 + 200, yMax + 10);
  CONTEXT.lineTo(xMin + 240, yMax / 2 + 20);
  CONTEXT.lineTo(xMin + 80, yMax / 2 + 20);
  CONTEXT.lineTo(xMin + 240, yMax / 2 + 20);
  CONTEXT.lineTo(xMax / 2 + 200, yMin + 10);
  CONTEXT.lineTo(xMin + 300, yMax / 2 - 10);
  CONTEXT.lineTo(xMin + 240, yMax / 2 + 20);
  CONTEXT.lineTo(xMin + 300, yMax / 2 - 10);
  CONTEXT.lineTo(xMax / 2 + 200, yMax + 10);
  CONTEXT.stroke();
}

/**
 * @description Function that draws an sphere
 *
 * @param {number} xMin - Minimum X coordinate
 * @param {number} xMax - Maximum X coordinate
 * @param {number} yMin - Minimum Y coordinate
 * @param {number} yMax - Maximum Y coordinate
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawSphere(xMin, xMax, yMin, yMax, CONTEXT) {
  CONTEXT.beginPath();
  CONTEXT.strokeStyle = 'black';
  CONTEXT.lineWidth = 5;
  CONTEXT.arc(xMax / 2 + 10, yMax - 130, xMax / 2 * 0.6, 0, 2 * Math.PI);
  CONTEXT.ellipse(xMax / 2 + 10, yMax - 130, xMax / 2 * 0.6, 30, 0, 2 * Math.PI, Math.PI);
  CONTEXT.stroke();
}

/**
 * @description Function that draws a truncated cone
 *
 * @param {number} xMin - Minimum X coordinate
 * @param {number} xMax - Maximum X coordinate
 * @param {number} yMin - Minimum Y coordinate
 * @param {number} yMax - Maximum Y coordinate
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawTruncatedCone(xMin, xMax, yMin, yMax, CONTEXT) {
  CONTEXT.beginPath();
  CONTEXT.strokeStyle = 'black';
  CONTEXT.lineWidth = 5;
  CONTEXT.ellipse((xMin + xMax) / 2, yMax - 70, (xMax - xMin) / 2, 50, 0, 2 * Math.PI, Math.PI);
  // CONTEXT.ellipse(xMax / 2 + 10, yMax - 80, xMax / 2 * 0.6, 30, 0, 0, 2 * Math.PI);
  CONTEXT.stroke();
}

/**
 * @description Function that distributes the space for the six polyhedra
 *
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawPolyhedra(CONTEXT, CANVAS) {
  let firstColum = 0;
  let secondColunm = CANVAS.width / 2;
  let firstRow = 0;
  let secondRow = CANVAS.height / 3;
  let thirdRow = secondRow * 2;

  drawPyramid(firstColum, secondColunm, firstRow, secondRow, CONTEXT);
  drawOctahedron(secondColunm, CANVAS.width, firstRow, secondRow, CONTEXT);
  drawSphere(firstColum, secondColunm, secondRow, thirdRow, CONTEXT);
  drawTruncatedCone(secondColunm, CANVAS.width, secondRow, thirdRow, CONTEXT);
}

/**
 * @description Function that starts the execution of the program
 */
function main() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    CANVAS.width = window.innerHeight - 175;
    CANVAS.height = window.innerHeight - 175;

    debugger;
    drawPolyhedra(CONTEXT, CANVAS);
  }
}
