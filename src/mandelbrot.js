/**
 * @file mandelbrot.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the Mandelbrot Set Visualization. More info about it here: https://en.wikipedia.org/wiki/Mandelbrot_set
 */

"use strict"


/**
 * @description Function that starts the execution of the progran
 */
function main() {
  const CANVAS = document.getElementById("canvas");
  if (CANVAS.getContext) {
    const CONTEXT = CANVAS.getContext("2d");
    CANVAS.width = window.innerWidth - 100;
    CANVAS.height = window.innerHeight - 150;
  }
}

main();
