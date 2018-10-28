const {generateTriangle} = require("./src/pattern_lib.js");
const {readTriangleArgs} = require("./src/utilLib.js")
const main = function(){
  let {triangleType,numberOfRow} = readTriangleArgs(process.argv)
  console.log(generateTriangle(triangleType,numberOfRow));
}

main();
