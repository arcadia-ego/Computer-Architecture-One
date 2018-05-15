const RAM = require("./ram");
const CPU = require("./cpu");

/**
 * Load an LS8 program into memory
 *
 * TODO: load this from a file on disk instead of having it hardcoded
 */
function loadMemory() {
  // Hardcoded program to print the number 8 on the console

  const program = [
    // print8.ls8
    "10011001", // LDI R0,8 0
    "00000000", //          1
    "00001000", //          2
    "10011001", // LDI R1,9 3
    "00000001", //          4
    "00001001",     //      5
    "10101010", //MUL R0,R1 <--- 6
    "00000000",          //7
    "00000001",          //7
    "01000011", // PRN R0  //8
    "00000000", //9
    "00000001" //HLT //10
  ];

  // Load the program into the CPU's memory a byte at a time
  for (let i = 0; i < program.length; i++) {
    cpu.poke(i, parseInt(program[i], 2));
  }
}

/**
 * Main
 */

let ram = new RAM(256);
let cpu = new CPU(ram);

// TODO: get name of ls8 file to load from command line

loadMemory(cpu);

cpu.startClock();
