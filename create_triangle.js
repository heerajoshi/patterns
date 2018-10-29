const {generateTriangle} = require("./src/pattern_lib.js");
const {readTriangleArgs} = require("./src/utilLib.js")
const main = function(){
  let patternDetail = readTriangleArgs(process.argv)
  console.log(generateTriangle(patternDetail).join('\n'));
}

main();
