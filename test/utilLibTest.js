const assert  = require("assert");
const {readRectangleArgs,readTriangleArgs,readDiamondArgs,readPatternArgs,generateLine} = require("../src/utilLib.js");

//---------readRectangleArgs 

let input1 = [,,"filled",4,5];
let expectedOutput = {typeOfRectangle: "filled", rows:4,columns:5 }
assert.deepEqual(readRectangleArgs(input1),expectedOutput);

let input2 = [,,"empty",6,5];
let expectedOutput2 = {typeOfRectangle: "empty", rows:6,columns:5 }
assert.deepEqual(readRectangleArgs(input2),expectedOutput2);

let input3 = [,,"alternate",4,5];
let expectedOutput3 = {typeOfRectangle: "alternate", rows:4,columns:5 }
assert.deepEqual(readRectangleArgs(input3),expectedOutput3);

//---------readTriangleArgs
 

let readTriangleInput1 = [,,"right",4];
let readTriangleOutput1 = {triangleType: "right", numberOfRow:4 }
assert.deepEqual(readTriangleArgs(readTriangleInput1),readTriangleOutput1);

let readTriangleInput2 = [,,"left",4];
let readTriangleOutput2  = {triangleType: "left", numberOfRow:4 }
assert.deepEqual(readTriangleArgs(readTriangleInput2),readTriangleOutput2);

//---------readDiamondArgs

let readDiamondInput1 = [,,"filled",9];
let readDiamoundOutput1 = {diamondType: "filled",height:9}
assert.deepEqual(readDiamondArgs(readDiamondInput1),readDiamoundOutput1)

let readDiamondInput2 = [,,"hollow",9];
let readDiamoundOutput2 = {diamondType: "hollow",height:9}
assert.deepEqual(readDiamondArgs(readDiamondInput2),readDiamoundOutput2)

let readDiamondInput3 = [,,"angled",9];
let readDiamoundOutput3 = {diamondType: "angled",height:9}
assert.deepEqual(readDiamondArgs(readDiamondInput3),readDiamoundOutput3)

//-------generateLine

let generateLineOutput = ['*','*','*','*','*','*','*','*'];
assert.deepEqual(generateLine("*",8),generateLineOutput)

let generateLineOutput1 = ['*','*'];
assert.deepEqual(generateLine("*",2),generateLineOutput1)
