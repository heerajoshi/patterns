const assert = require("assert");

const {generateRectangle} = require("../library/all_pattern_library.js");

//-----(Filled Rectangle Tests)
let line = new Array(5).fill("*").join("");
let filledRectangle_2_5 = new Array(2).fill(line).join("\n");
assert.equal(generateRectangle('filled',2,5),filledRectangle_2_5);

line = new Array(2).fill("*").join("");
let filledRectangle_2_2 = new Array(2).fill(line).join("\n");
assert.equal(generateRectangle('filled',2,2),filledRectangle_2_2);

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
assert.equal(generateRectangle('alternate',2,8),alternateRectangle_2_8);

starLine = new Array(2).fill("*").join("");
dashLine = new Array(2).fill("-").join("");
let alternateRectangle_5_2 = starLine +"\n"+ dashLine +"\n"+ starLine;
alternateRectangle_5_2 += "\n"+ dashLine +"\n"+ starLine;
assert.equal(generateRectangle('alternate',5,2),alternateRectangle_5_2);

//=====(TRIANGLE TESTS)
const {makeTriangle} = require("../library/all_pattern_library.js");

//=====(Left Alignment Triangle Test)
let leftTriangle_5 = "*\n"
  leftTriangle_5  += "**\n"
  leftTriangle_5  += "***\n"
  leftTriangle_5  += "****\n"
  leftTriangle_5  += "*****";

assert.equal(makeTriangle("left",5),leftTriangle_5);

let leftTriangle_7 = leftTriangle_5 + "\n******\n*******";


assert.equal(makeTriangle("left",7),leftTriangle_7);

//=====(Right Alignment Triangle Test)
let rightTriangle_2 = " *\n**";
assert.equal(makeTriangle("right",2),rightTriangle_2);

let rightTriangle_6 = "     *\n"
  rightTriangle_6  += "    **\n"
  rightTriangle_6  += "   ***\n"
  rightTriangle_6  += "  ****\n"
  rightTriangle_6  += " *****\n"
  rightTriangle_6  += "******"
assert.equal(makeTriangle("right",6),rightTriangle_6);
//=====(DIAMOND TESTS)
const {generateDiamond} = require("../library/all_pattern_library.js");

//=====(Filled Diamond Test)
let filledDiamond_3 = " *\n";
filledDiamond_3    += "***\n";
filledDiamond_3    += " *";

let filledDiamond_5  = "  *\n";
    filledDiamond_5 += " ***\n"
    filledDiamond_5 += "*****\n"
    filledDiamond_5 += " ***\n"
    filledDiamond_5 += "  *";

assert.equal(generateDiamond("filled",3),filledDiamond_3);
assert.equal(generateDiamond("filled",5),filledDiamond_5);

//=====(Hollow Diamond Test)
let hollowDiamond_3 = " *\n"
   hollowDiamond_3 += "* *\n"
   hollowDiamond_3 += " *";

let hollowDiamond_5 = "  *\n"
 hollowDiamond_5 +=   " * *\n"
 hollowDiamond_5 +=   "*   *\n"
 hollowDiamond_5 +=   " * *\n"
 hollowDiamond_5 +=   "  *"

assert.equal(generateDiamond("hollow",3),hollowDiamond_3);
assert.equal(generateDiamond("hollow",5),hollowDiamond_5);

//=====(Angled Diamond Test)
let angledDiamond_3 = " *\n"
 angledDiamond_3 +=   "* *\n"
 angledDiamond_3 +=   " *";


let angledDiamond_5 = "  *\n"
  angledDiamond_5  += " / \\\n"
  angledDiamond_5  += "*   *\n"
  angledDiamond_5  += "\\ /\n"
  angledDiamond_5  += "  *";


assert.equal(generateDiamond("angled",3),angledDiamond_3);
assert.equal(generateDiamond("angled",5),angledDiamond_5);

