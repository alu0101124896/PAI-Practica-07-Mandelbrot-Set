/**
 * @file ejercicio01.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna - Computer Science - Interactive Aplication Programing
 * @description This program implements a function to draw multiple polyhedra
 */

"use strict";

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
  CONTEXT.ellipse((xMin + xMax) / 2, yMin + 50, 50, 20, 0, 2 * Math.PI, 0);
  CONTEXT.ellipse((xMin + xMax) / 2, yMax - 40, (xMax - xMin - 150) / 2, 50, 0, 2 * Math.PI, Math.PI);
  CONTEXT.lineTo(xMin+150, yMin+50);
  CONTEXT.stroke();
}

/**
 * @description Function that draws a cilinder
 *
 * @param {number} xMin - Minimum X coordinate
 * @param {number} xMax - Maximum X coordinate
 * @param {number} yMin - Minimum Y coordinate
 * @param {number} yMax - Maximum Y coordinate
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawCilinder(xMin, xMax, yMin, yMax, CONTEXT) {
  CONTEXT.beginPath();
  CONTEXT.strokeStyle = 'black';
  CONTEXT.lineWidth = 5;
  CONTEXT.ellipse((xMin + xMax) / 2, yMin + 50, (xMax - xMin - 200) / 2, 50, 0, 2 * Math.PI, 0);
  CONTEXT.ellipse((xMin + xMax) / 2, yMax - 55, (xMax - xMin - 200) / 2, 50, 0, 2 * Math.PI, Math.PI);
  CONTEXT.lineTo(xMin+100, yMin+50);
  CONTEXT.stroke();
}

/**
 * @description Function that distributes the space for the six polyhedra
 *
 * @param {*} CONTEXT - Canvas context
 * @param {*} CANVAS - Canvas
 */
function drawPolyhedra(CONTEXT, CANVAS) {
  const FIRST_COLUMN = 0;
  const SECOND_COLUMN = CANVAS.width / 2;
  const FIRST_ROW = 0;
  const SECOND_ROW = CANVAS.height / 3;
  const THIRD_ROW = SECOND_ROW * 2;

  drawPyramid(FIRST_COLUMN, SECOND_COLUMN, FIRST_ROW, SECOND_ROW, CONTEXT);
  drawOctahedron(SECOND_COLUMN, CANVAS.width, FIRST_ROW, SECOND_ROW, CONTEXT);
  drawSphere(FIRST_COLUMN, SECOND_COLUMN, SECOND_ROW, THIRD_ROW, CONTEXT);
  drawTruncatedCone(SECOND_COLUMN, CANVAS.width, SECOND_ROW, THIRD_ROW, CONTEXT);
  drawCilinder(FIRST_COLUMN, SECOND_COLUMN, THIRD_ROW, CANVAS.height, CONTEXT);
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
