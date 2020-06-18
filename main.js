'use strict';

// assert library is used for testing
const assert = require('assert');

//readline library is used to read input from the user
const readline = require('readline');

// setting up the readline settings
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//the stacks objects represents the entire toy
//the arrays are the rods in the toy
//the numbers represent the disks
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//prints the board
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
/** 
 * this function takes in the startStack name and endStack name, and moved the top piece
 * from the corresponding starting stack to the corresponding ending stack
*@param {*} startStack the name of the starting stack from which to move your choice of peice
*@param {*} endStack the name of the ending stck where the moved peice should land

*/
const movePiece = (startStack, endStack) => {
  // Your code here

}

/**
 * This function takes in the startStack name and endStack name
 * and returns true only if the move is a legal and valid move
 * Otherwise it returns false
 * @param {*} startStack the name of the starting stack from which to move your choice of peice
 * @param {*} endStack the name of the ending stck where the moved peice should land
  *** if move is illegal console.log('can't do that')
 */
const isLegal = (startStack, endStack) => {
  // Your code here

}

/**
 * This function returns 'true' if the board is in a winning state, otherwise return 'false'
 * winning state means the stack has been moved to stack 'b' or 'c' smallest biggest
 */
const checkForWin = () => {
  // Your code here

}

/**
 * This function should take in 2 inputs, the startStack and endStack and process that turn for the player
 * 
 * @param {*} startStack the stack they want to move from
 * @param {*} endStack  the stack they want to move to
 */
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

}



const getPrompt = () => {


  //first thing is print out the board
  printStacks();

  //asks the user for the starting stack
  rl.question('start stack: ', (startStack) => {


    //once the user enters the starting stack, it asks for the ending stack
    rl.question('end stack: ', (endStack) => {


      //once the user enters the ending stack
      //it sends both inputs, startStack and endStack, to a function called towersOfHanoi()
      towersOfHanoi(startStack, endStack);

      //once that function returns, this calls getPrompt() over again
      getPrompt();
    });
  });
}

getPrompt();