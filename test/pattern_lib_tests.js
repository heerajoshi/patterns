const assert = require("assert");

const {generateRectangle} = require("../src/pattern_lib.js");

//-----(Filled Rectangle Tests)
let line = new Array(5).fill("*").join("");
let filledRectangle_2_5 = new Array(2).fill(line).join("\n");
assert.equal(generateRectangle({typeOfRectangle:'filled', rows: 2 , columns : 5}),filledRectangle_2_5);

line = new Array(2).fill("*").join("");
let filledRectangle_2_2 = new Array(2).fill(line).join("\n");
assert.equal(generateRectangle({ typeOfRectangle: 'filled', rows: 2 , columns: 2 }),filledRectangle_2_2);

//-----(Empty Rectangle Tests)
let topLine = new Array(8).fill("*").join("");
let middleLine = "*" + new Array(6).fill(" ").join("");
middleLines = new Array(3).fill(middleLine).join("\n");
let emptyRectangle_5_8 = topLine +"\n"+ middleLines +"\n"+ topLine;

topLine = new Array(5).fill("*").join("");
middleLine = "*" + new Array(3).fill(" ").join("");
middleLines = new Array(10).fill(middleLine).join("\n");
let emptyRectangle_12_5 = topLine +"\n"+ middleLine +"\n"+ topLine;

//-----(Alternate Rectangle Tests)
let starLine = new Array(8).fill("*").join("");
let dashLine = new Array(8).fill("-").join("");
let alternateRectangle_2_8 = starLine +"\n"+ dashLine;
assert.equal(generateRectangle({typeOfRectangle:'alternate', rows:2 ,columns:8}),alternateRectangle_2_8);

starLine = new Array(2).fill("*").join("");
dashLine = new Array(2).fill("-").join("");
let alternateRectangle_5_2 = starLine +"\n"+ dashLine +"\n"+ starLine;
alternateRectangle_5_2 += "\n"+ dashLine +"\n"+ starLine;
assert.equal(generateRectangle({typeOfRectangle:'alternate', rows: 5, columns:2 }),alternateRectangle_5_2);

//=====(TRIANGLE TESTS)
const {generateTriangle} = require("../src/pattern_lib.js");

//=====(Left Alignment Triangle Test)
let leftTriangle_5 = "*    \n"
  leftTriangle_5  += "**   \n"
  leftTriangle_5  += "***  \n"
  leftTriangle_5  += "**** \n"
  leftTriangle_5  += "*****";

assert.equal(generateTriangle({ triangleType : "left", numberOfRow :5 }),leftTriangle_5);

let leftTriangle_7  = "*      \n"
    leftTriangle_7 += "**     \n"
    leftTriangle_7 += "***    \n"
    leftTriangle_7 += "****   \n"
    leftTriangle_7 += "*****  \n"
    leftTriangle_7 += "****** \n"
    leftTriangle_7 += "*******"

assert.equal(generateTriangle({ triangleType: "left", numberOfRow:7 }),leftTriangle_7);

//=====(Right Alignment Triangle Test)
let rightTriangle_2 = " *\n**";
assert.equal(generateTriangle({ triangleType: "right", numberOfRow: 2 }),rightTriangle_2);

let rightTriangle_6 = "     *\n"
  rightTriangle_6  += "    **\n"
  rightTriangle_6  += "   ***\n"
  rightTriangle_6  += "  ****\n"
  rightTriangle_6  += " *****\n"
  rightTriangle_6  += "******"
assert.equal(generateTriangle({ triangleType: "right", numberOfRow: 6 }),rightTriangle_6);
//=====(DIAMOND TESTS)
const {generateDiamond} = require("../src/pattern_lib.js");

//=====(Filled Diamond Test)
let filledDiamond_3 = " * \n";
filledDiamond_3    += "***\n";
filledDiamond_3    += " * ";

let filledDiamond_5  = "  *  \n";
    filledDiamond_5 += " *** \n"
    filledDiamond_5 += "*****\n"
    filledDiamond_5 += " *** \n"
    filledDiamond_5 += "  *  ";

assert.equal(generateDiamond({diamondType: "filled", height: 3 }),filledDiamond_3);
assert.equal(generateDiamond({diamondType: "filled", height: 5 }),filledDiamond_5);

//=====(Hollow Diamond Test)
let hollowDiamond_3 = " * \n"
   hollowDiamond_3 += "* *\n"
   hollowDiamond_3 += " * ";

let hollowDiamond_5 = "  *  \n"
 hollowDiamond_5 +=   " * * \n"
 hollowDiamond_5 +=   "*   *\n"
 hollowDiamond_5 +=   " * * \n"
 hollowDiamond_5 +=   "  *  "

assert.equal(generateDiamond({diamondType: "hollow", height: 3 }),hollowDiamond_3);
assert.equal(generateDiamond({diamondType: "hollow", height: 5 }),hollowDiamond_5);

//=====(Angled Diamond Test)
let angledDiamond_3 = " * \n"
 angledDiamond_3 +=   "* *\n"
 angledDiamond_3 +=   " * ";


let angledDiamond_5 = "  *  \n"
  angledDiamond_5  += " / \\\n"
  angledDiamond_5  += "*   *\n"
  angledDiamond_5  += " \\ /\n"
  angledDiamond_5  += "  *  ";


assert.equal(generateDiamond({diamondType: "angled", height: 3 }),angledDiamond_3);
assert.equal(generateDiamond({diamondType: "angled", height: 5 }),angledDiamond_5);
 
